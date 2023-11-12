let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");

function onClickCreateTask() {
  let taskList = document.getElementById("taskList");

  let listElement = document.createElement("li");
  let spanElement = document.createElement("span");
  spanElement.textContent = inputTask.value;

  // delete button
  let deleteButton = document.createElement("button");
  //deleteButton.textContent = "Delete";
  deleteButton.innerHTML = "&#10006;";
  deleteButton.addEventListener("click", function () {
    deleteTask(listElement);
  });

  //check button
  let checkButton = document.createElement("button");
  //checkButton.textContent = "Check";
  checkButton.innerHTML = "&#10003;";
  checkButton.addEventListener("click", function () {
    checkTask(spanElement);
  });

  listElement.appendChild(spanElement);
  listElement.appendChild(deleteButton);
  listElement.appendChild(checkButton);

  taskList.appendChild(listElement);
}

function deleteTask(taskElement) {
  let taskList = document.getElementById("taskList");
  taskList.removeChild(taskElement);
}

function checkTask(spanElement) {
  spanElement.classList.toggle("completed");
}

function createTaskElement() {
  let taskText = inputTask.value;
  onClickCreateTask(taskText);
  inputTask.value = "";
}

createBtn.addEventListener("click", createTaskElement);

//domasna - koga ke klilknes na add taks pokraj dodavanjeto na taskovi, da se dodade i complete button i delete button na taskovite
