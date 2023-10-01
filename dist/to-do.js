const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");

function addTodo() {
  const todoText = newTodoInput.value.trim();
  if (todoText === "") return;

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.classList.add("todo-checkbox");
  // todoCheckbox.setAttribute("id", "default-checkbox");

  const todoItemContent = document.createElement("div"); // Create a div for the item content
  todoItemContent.classList.add("todo-item");

  const todoTextElement = document.createElement("span");
  todoTextElement.textContent = todoText;

  const todoDeleteButton = document.createElement("button");
  todoDeleteButton.innerHTML = '<i class="fi fi-rr-trash"></i>';
  todoDeleteButton.classList.add("todo-delete");
  todoDeleteButton.onclick = function () {
    todoList.removeChild(todoItem);
  };

  todoItemContent.appendChild(todoCheckbox); // Add the checkbox to the content div
  todoItemContent.appendChild(todoTextElement); // Add the text span to the content div

  todoItem.appendChild(todoItemContent); // Add the content div to the todoItem div
  todoItem.appendChild(todoDeleteButton);

  todoCheckbox.addEventListener("change", function () {
    if (todoCheckbox.checked) {
      todoItem.classList.add("checked");
      // Move the checked item to the bottom
      todoList.appendChild(todoItem);
    } else {
      todoItem.classList.remove("checked");
    }
  });

  todoList.appendChild(todoItem);

  if (todoList.children.length > 2) {
    todoList.style.overflowY = "scroll";
  }

  newTodoInput.value = "";
}
