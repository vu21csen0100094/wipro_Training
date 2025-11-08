const todoInput = document.getElementById('taskInput');
const addButton = document.getElementById('addTaskButton');
const todoList = document.getElementById('taskList');
let currentFilter = "all";

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");

        // Create a div to hold checkbox + task text
        const taskLeft = document.createElement("div");
        taskLeft.style.display = "flex";
        taskLeft.style.alignItems = "center";
        taskLeft.style.gap = "10px"; // space between checkbox and text

        // Checkbox for completed
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
                span.style.color = "gray";
            } else {
                span.style.textDecoration = "none";
                span.style.color = "black";
            }
            applyFilter(); // update filter view
        });

        // Task text
        const span = document.createElement("span");
        span.textContent = taskText;

        // Add checkbox and text to div
        taskLeft.appendChild(checkbox);
        taskLeft.appendChild(span);

        // Append the div to li
        li.appendChild(taskLeft);

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", () => {
            const newText = prompt("Edit task:", span.textContent);
            if (newText !== null && newText.trim() !== "") {
                span.textContent = newText;
            }
        });
        li.appendChild(editBtn);

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        // Add the task to the list
        todoList.appendChild(li);
        todoInput.value = "";

        applyFilter(); // apply current filter after adding
    }
}

// Add task via button click
addButton.addEventListener("click", addTask);

// Add task via Enter key
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

// Filter tasks
function filterTasks(type) {
    currentFilter = type;
    applyFilter();
}

// Apply current filter view
function applyFilter() {
    const tasks = todoList.querySelectorAll("li");
    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type='checkbox']");
        const isCompleted = checkbox.checked;
        if (currentFilter === "all") task.style.display = "flex";
        else if (currentFilter === "active" && isCompleted) task.style.display = "none";
        else if (currentFilter === "completed" && !isCompleted) task.style.display = "none";
        else task.style.display = "flex";
    });

    // Update active filter button style
    document.querySelectorAll(".filter button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.filter button[onclick="filterTasks('${currentFilter}')"]`).classList.add("active");
}
