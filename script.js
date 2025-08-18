// Get necessary DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("आपको कुछ लिखना होगा!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Cross icon
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save data to localStorage
}

// Event listener for task completion and deletion
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

// Function to show tasks from localStorage on page load
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("todoData");
}

// Initial call to show tasks
showTasks();
