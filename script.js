// Get elements from the DOM
const taskInput = document.getElementById('input-el');
const addButton = document.getElementById('btn');
const inputError = document.getElementById('input-er');
const taskList = document.getElementById('task-list');

// Event listener for the "Add" button
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Clear previous error message
    inputError.textContent = '';

    // Get the task value from the input
    const taskText = taskInput.value.trim();

    // Check if the task is empty
    if (taskText === '') {
        inputError.textContent = 'Task is required';
        return; // Exit the function if the task is empty
    }

    // Create a new list item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Append the new task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskInput.value = '';
}
