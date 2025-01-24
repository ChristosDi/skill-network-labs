const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompleteBtn");

let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Add completed property
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display all tasks
function displayTasks() {
    taskList.innerHTML = ""; // Clear the task list before displaying
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `<input type="checkbox" id="task-${index}" ${
            task.completed ? "checked" : ""
        }>
        <label for="task-${index}">${task.text}</label>`;

        // Add event listener to toggle task completion
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to clear completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter((task) => !task.completed); // Keep only incomplete tasks
    displayTasks();
}

// Event listeners for buttons
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Display initial tasks (if any)
displayTasks();