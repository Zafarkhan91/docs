// --- Data Imports ---
// Import the educational content from the data directory.
// Using JS modules makes the data easier to manage and extend.
import { htmlData } from './data/html.js';
import { cssData } from './data/css.js';
import { jsData } from './data/js.js';
import { componentsData } from './data/components.js';

// --- Main Application Logic ---
// Wait for the DOM to be fully loaded before running any scripts.
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Element References ---
    // Get references to all the DOM elements we'll need to interact with.
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const contentPlaceholder = document.querySelector('.content-placeholder');
    const contentDisplay = document.querySelector('.content-display');
    const contentTitle = document.getElementById('content-title');
    const contentDescription = document.getElementById('content-description');
    const runBtn = document.getElementById('run-btn');
    const saveBtn = document.getElementById('save-btn');
    const previewFrame = document.getElementById('preview-frame');
    const searchBar = document.getElementById('search-bar');
    const editorContainer = document.getElementById('editor-container');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    // Feature-specific elements
    const addNoteBtn = document.getElementById('add-note-btn');
    const addNoteModal = document.getElementById('add-note-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const addNoteForm = document.getElementById('add-note-form');
    const exportBtn = document.getElementById('export-btn');

    // --- 2. State Variables ---
    // These variables hold the application's state.
    const defaultData = { "HTML": htmlData, "CSS": cssData, "JavaScript": jsData, "Components": componentsData };
    let activeItem = null; // The currently selected item from the sidebar.
    let editor = null; // The Monaco Editor instance.
    let allData = { ...defaultData }; // Combined default and custom data.

    // --- 3. Helper Functions ---
    /**
     * Loads custom notes from localStorage.
     * @returns {Array} An array of custom note objects.
     */
    const loadCustomNotes = () => {
        const notes = localStorage.getItem('custom_notes');
        return notes ? JSON.parse(notes) : [];
    };

    /**
     * Saves a new custom note to localStorage.
     * @param {object} note - The note object to save.
     * @returns {boolean} True if saved successfully, false otherwise.
     */
    const saveCustomNote = (note) => {
        const customNotes = loadCustomNotes();
        if (customNotes.some(n => n.name === note.name)) {
            alert('A note with this title already exists in "My Notes".');
            return false;
        }
        customNotes.push(note);
        localStorage.setItem('custom_notes', JSON.stringify(customNotes));
        return true;
    };

    // --- 4. Core Application Functions ---

    /**
     * Populates the sidebar with categories and items from the `allData` object.
     * This function is called on initial load and after a new note is added.
     */
    function populateSidebar() {
        sidebar.innerHTML = ''; // Clear existing sidebar content

        // Combine default data with custom notes from localStorage
        const customNotes = loadCustomNotes();
        allData = { ...defaultData };
        if (customNotes.length > 0) {
            allData["My Notes"] = customNotes;
        }

        // Create and append category sections and their items
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
                listItem.dataset.category = categoryName;
                listItem.dataset.name = item.name;
                itemsList.appendChild(listItem);
            });
            categoryElement.appendChild(itemsList);
            sidebar.appendChild(categoryElement);
        }
    }

    /**
     * Handles the display of content when a sidebar item is clicked.
     * Initializes or updates the Monaco editor.
     * @param {object} item - The item object to display.
     */
    function displayContent(item) {
        activeItem = item;
        contentPlaceholder.style.display = 'none';
        contentDisplay.style.display = 'flex';
        contentTitle.textContent = item.name;
        contentDescription.innerHTML = item.description;

        // Load saved code from localStorage, or use the item's default code
        const savedCodeKey = `note_${item.category}_${item.name}`;
        const savedCode = localStorage.getItem(savedCodeKey);
        const code = savedCode || item.code || '';

        // Determine the language for syntax highlighting
        let language = 'html';
        if (item.category === 'CSS') language = 'css';
        if (item.category === 'JavaScript') language = 'javascript';
        if (item.category === 'My Notes' || item.category === 'Components') {
            if (code.includes('<script>')) language = 'javascript';
            if (code.includes('<style>')) language = 'css';
        }

        // Initialize Monaco Editor if it doesn't exist, otherwise update its content and language
        if (editor) {
            editor.getModel().setValue(code);
            monaco.editor.setModelLanguage(editor.getModel(), language);
        } else {
            // Load the editor from the CDN using the loader script
            require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' }});
            require(['vs/editor/editor.main'], () => {
                editor = monaco.editor.create(editorContainer, {
                    value: code,
                    language: language,
                    theme: 'vs-dark',
                    automaticLayout: true, // This makes the editor responsive
                    minimap: { enabled: false }
                });
            });
        }

        // Use a small timeout to ensure the editor is fully initialized before running the code preview.
        // This is a common workaround for the async nature of the editor's creation.
        setTimeout(() => runCode(), 200);
    }

    /**
     * Executes the code from the editor and displays the output in the preview iframe.
     */
    function runCode() {
        if (!editor || !activeItem) return;
        const code = editor.getValue();
        const previewDoc = previewFrame.contentWindow.document;
        let content = '';

        // Generate the appropriate content for the iframe based on the category
        if (['HTML', 'Components', 'My Notes'].includes(activeItem.category)) {
            content = code;
        } else if (activeItem.category === 'CSS') {
            content = `<style>${code}</style><div><h3>Styled Content</h3><p>This is some dummy content to which the CSS is applied.</p><div class="box">A box</div></div>`;
        } else if (activeItem.category === 'JavaScript') {
            content = `<div id="output"></div><script>
                // Redirect console.log to the preview panel for better visibility
                (function() {
                    const output = document.getElementById('output');
                    const oldLog = console.log;
                    console.log = function(...args) {
                        oldLog.apply(console, args);
                        const p = document.createElement('p');
                        p.textContent = '> ' + args.map(a => JSON.stringify(a)).join(' ');
                        output.appendChild(p);
                    };
                })();
                try { ${code} } catch(e) { console.error(e); }
            <\/script>`;
        }
        previewDoc.open();
        previewDoc.write(content);
        previewDoc.close();
    }

    /**
     * Saves the current content of the editor to localStorage.
     */
    function saveCode() {
        if (!activeItem || !editor) return;
        const code = editor.getValue();
        const key = `note_${activeItem.category}_${activeItem.name}`;
        localStorage.setItem(key, code);
        alert(`"${activeItem.name}" note saved!`);
    }

    /**
     * Filters the sidebar items based on the search input.
     * @param {Event} e - The input event from the search bar.
     */
    function filterSidebar(e) {
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
            // Hide the entire category if no items match the search
            category.style.display = hasVisibleItems ? '' : 'none';
        });
    }

    /**
     * Gathers all user notes from localStorage and triggers a download as a JSON file.
     */
    function exportNotes() {
        const exportedData = { customNotes: loadCustomNotes(), editedNotes: {} };
        // Iterate through all localStorage keys to find edited notes
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('note_')) {
                exportedData.editedNotes[key] = localStorage.getItem(key);
            }
        }
        if (exportedData.customNotes.length === 0 && Object.keys(exportedData.editedNotes).length === 0) {
            alert("No notes to export!");
            return;
        }
        // Create a downloadable file from the JSON data
        const jsonString = JSON.stringify(exportedData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-dev-playground-notes.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert("Notes exported successfully!");
    }

    // --- 5. Event Listeners ---

    // Hamburger menu for mobile
    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // "Add New Note" modal
    const openModal = () => addNoteModal.style.display = 'block';
    const closeModal = () => addNoteModal.style.display = 'none';
    addNoteBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { // Close modal if clicking outside of it
        if (e.target === addNoteModal) closeModal();
    });

    // Handle the submission of the "Add New Note" form
    addNoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('note-title').value;
        const code = document.getElementById('note-code').value;
        const description = document.getElementById('note-description').value;
        const newNote = { name: title, category: 'My Notes', description: description || 'Custom note.', code: code };
        if (saveCustomNote(newNote)) {
            populateSidebar();
            closeModal();
            addNoteForm.reset();
            alert('New note added successfully!');
        }
    });

    // Sidebar interactions (category collapse and item selection)
    sidebar.addEventListener('click', (e) => {
        if (e.target.tagName === 'H3') {
            e.target.parentElement.classList.toggle('open');
        }
        if (e.target.tagName === 'LI') {
            const category = e.target.dataset.category;
            const name = e.target.dataset.name;
            const item = allData[category].find(i => i.name === name);
            if (item) {
                displayContent(item);
                document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('active'));
                e.target.classList.add('active');
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            }
        }
    });

    // Main action buttons
    runBtn.addEventListener('click', () => runCode());
    saveBtn.addEventListener('click', () => saveCode());
    exportBtn.addEventListener('click', exportNotes);
    searchBar.addEventListener('input', filterSidebar);

    // --- 6. Initial Load ---

    // Populate the sidebar with data when the app starts
    populateSidebar();

    // Register the service worker for offline support
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('Service Worker registered.', reg))
                .catch(err => console.log('Service Worker registration failed: ', err));
        });
    }
});
