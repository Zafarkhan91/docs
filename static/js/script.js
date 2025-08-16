// --- Main Application Logic ---
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Element References ---
    const sidebar = document.getElementById('sidebar');
    const contentDisplay = document.querySelector('.content-display');
    const contentPlaceholder = document.querySelector('.content-placeholder');
    const contentTitle = document.getElementById('content-title');
    const contentDescription = document.getElementById('content-description');
    const runBtn = document.getElementById('run-btn');
    const saveBtn = document.getElementById('save-btn');
    const editorContainer = document.getElementById('editor-container');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const addNoteBtn = document.getElementById('add-note-btn');
    const addNoteModal = document.getElementById('add-note-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const addNoteForm = document.getElementById('add-note-form');
    const exportBtn = document.getElementById('export-btn');

    // --- 2. State Variables ---
    let activeItem = null;
    let editor = null;
    let allData = {};

    // --- 3. Helper Functions ---
    /**
     * Gets the CSRF token from the cookie.
     * @param {string} name - The name of the cookie to get.
     * @returns {string} The CSRF token.
     */
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    // --- 4. Core Application Functions ---

    /**
     * Fetches all data from the backend API and populates the sidebar.
     */
    async function populateSidebar() {
        sidebar.innerHTML = '<li>Loading...</li>';
        try {
            const response = await fetch('/api/categories/');
            const categories = await response.json();

            allData = {};
            sidebar.innerHTML = '';

            categories.forEach(category => {
                allData[category.name] = category.topics.map(topic => ({...topic, type: 'topic', category: category.name}));
            });

            if (window.isAuthenticated) {
                const userNotesResponse = await fetch('/api/user_notes/');
                const userNotes = await userNotesResponse.json();
                if (userNotes.length > 0) {
                    allData["My Notes"] = userNotes.map(note => ({
                        id: note.id,
                        name: note.title,
                        description: note.description,
                        code: note.code,
                        type: 'note',
                        category: 'My Notes'
                    }));
                }
            }

            for (const categoryName in allData) {
                const categoryElement = document.createElement('div');
                categoryElement.className = 'category';
                const categoryTitle = document.createElement('h3');
                categoryTitle.textContent = categoryName;
                categoryElement.appendChild(categoryTitle);
                const itemsList = document.createElement('ul');
                itemsList.className = 'category-items';

                allData[categoryName].forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item.name;
                    listItem.dataset.id = item.id;
                    listItem.dataset.category = categoryName;
                    itemsList.appendChild(listItem);
                });
                categoryElement.appendChild(itemsList);
                sidebar.appendChild(categoryElement);
            }

        } catch (error) {
            console.error('Failed to load sidebar data:', error);
            sidebar.innerHTML = '<li>Error loading data.</li>';
        }
    }

    /**
     * Displays content in the main panel.
     */
    function displayContent(item) {
        activeItem = item;
        contentPlaceholder.style.display = 'none';
        contentDisplay.style.display = 'flex';
        contentTitle.textContent = item.name;
        contentDescription.innerHTML = item.description;
        const code = item.code || '';

        let language = 'html';
        if (item.category === 'CSS') language = 'css';
        if (item.category === 'JavaScript') language = 'javascript';
        if (code.includes('<script>')) language = 'javascript';
        if (code.includes('<style>')) language = 'css';

        saveBtn.style.display = item.type === 'note' ? 'inline-block' : 'none';

        if (editor) {
            editor.getModel().setValue(code);
            monaco.editor.setModelLanguage(editor.getModel(), language);
        } else {
            require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' }});
            require(['vs/editor/editor.main'], () => {
                editor = monaco.editor.create(editorContainer, { value: code, language: language, theme: 'vs-dark', automaticLayout: true, minimap: { enabled: false } });
            });
        }
        setTimeout(runCode, 200);
    }

    function runCode() { /* ... same as before ... */ }

    async function saveCode() {
        if (!activeItem || activeItem.type !== 'note' || !editor) return;

        const code = editor.getValue();
        const response = await fetch(`/api/user_notes/${activeItem.id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
            body: JSON.stringify({ title: activeItem.name, description: activeItem.description, code: code })
        });

        if (response.ok) {
            alert(`Note "${activeItem.name}" updated successfully!`);
            activeItem.code = code;
        } else {
            alert('Failed to save note.');
        }
    }

    async function exportNotes() {
        if (!window.isAuthenticated) {
            alert("Please log in to export your notes.");
            return;
        }
        const response = await fetch('/api/export/');
        const data = await response.json();

        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-dev-playground-notes.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // --- 5. Event Listeners ---

    sidebar.addEventListener('click', (e) => {
        if (e.target.tagName === 'H3') e.target.parentElement.classList.toggle('open');
        if (e.target.tagName === 'LI') {
            const categoryName = e.target.dataset.category;
            const itemId = e.target.dataset.id;
            const item = allData[categoryName]?.find(i => i.id == itemId);
            if (item) {
                displayContent(item);
                document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('active'));
                e.target.classList.add('active');
                if (window.innerWidth <= 768) sidebar.classList.remove('open');
            }
        }
    });

    addNoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('note-title').value;
        const code = document.getElementById('note-code').value;
        const description = document.getElementById('note-description').value;

        const response = await fetch('/api/user_notes/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
            body: JSON.stringify({ title, description, code })
        });

        if (response.ok) {
            alert('New note added successfully!');
            closeModal();
            addNoteForm.reset();
            populateSidebar();
        } else {
            alert('Failed to add note.');
        }
    });

    const openModal = () => addNoteModal.style.display = 'block';
    const closeModal = () => addNoteModal.style.display = 'none';
    addNoteBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === addNoteModal) closeModal(); });
    hamburgerBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
    runBtn.addEventListener('click', runCode);
    saveBtn.addEventListener('click', saveCode);
    exportBtn.addEventListener('click', exportNotes);
    // Re-implement search
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('#sidebar .category').forEach(category => {
            let hasVisibleItems = false;
            category.querySelectorAll('li').forEach(li => {
                const text = li.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    li.style.display = '';
                    hasVisibleItems = true;
                } else {
                    li.style.display = 'none';
                }
            });
            category.style.display = hasVisibleItems ? '' : 'none';
        });
    });

    // --- 6. Initial UI State ---
    function setInitialUI() {
        if (!window.isAuthenticated) {
            addNoteBtn.style.display = 'none';
            exportBtn.style.display = 'none';
        }
    }

    // --- 7. Initial Load ---
    setInitialUI();
    populateSidebar();

    // Service Worker registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/static/sw.js') // Correct path
                .then(reg => console.log('Service Worker registered.', reg))
                .catch(err => console.log('Service Worker registration failed: ', err));
        });
    }
});
