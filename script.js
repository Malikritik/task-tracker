document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');

        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span').textContent;
    const newTaskText = prompt('Edit Task:', taskText);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span').textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
