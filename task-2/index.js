// index.js

document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("input");
    const priorityElement = document.getElementById("priority");
    const addButton = document.getElementById("add");
    const todoList = document.getElementById("list");
  
    addButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", deleteTodo);
  
    function addTodo() {
      const task = inputElement.value.trim();
      const priority = priorityElement.value;
  
      if (task !== "") {
        const listItem = document.createElement("li");
        listItem.setAttribute("data-priority", priority);
        listItem.innerHTML = `${task}<span class="delete">X</span>`;
        todoList.appendChild(listItem);
        inputElement.value = "";
        priorityElement.value = "low"; // Reset the priority dropdown
      }
    }
  
    function deleteTodo(event) {
      if (event.target.classList.contains("delete")) {
        const listItem = event.target.parentElement;
        todoList.removeChild(listItem);
      }
    }
  });
  