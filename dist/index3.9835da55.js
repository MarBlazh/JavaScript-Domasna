document.addEventListener("DOMContentLoaded", function() {
    let createBtn = document.getElementById("addTaskBtn");
    let inputTask = document.getElementById("newTask");
    function createTaskElement(taskText) {
        let taskList = document.getElementById("taskList");
        // Create a list item
        let listElement = document.createElement("li");
        // Create a span for the task text
        let spanElement = document.createElement("span");
        spanElement.textContent = taskText;
        // Create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteTask(listElement);
        });
        // Create a check button
        let checkButton = document.createElement("button");
        checkButton.textContent = "Check";
        checkButton.addEventListener("click", function() {
            checkTask(spanElement);
        });
        // Append elements to the list item
        listElement.appendChild(spanElement);
        listElement.appendChild(deleteButton);
        listElement.appendChild(checkButton);
        // Append the list item to the task list
        taskList.appendChild(listElement);
    }
    function deleteTask(taskElement) {
        let taskList = document.getElementById("taskList");
        taskList.removeChild(taskElement);
    }
    function checkTask(spanElement) {
        // Toggle the "completed" class to add or remove line-through style
        spanElement.classList.toggle("completed");
    }
    function onClickCreateTask() {
        let taskText = inputTask.value;
        // Create the task element and append it to the task list
        createTaskElement(taskText);
        // Clear the input field after adding the task
        inputTask.value = "";
    }
    createBtn.addEventListener("click", onClickCreateTask);
});

//# sourceMappingURL=index3.9835da55.js.map
