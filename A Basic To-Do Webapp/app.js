const todoList = document.querySelector(".todo-list")
const addTodoForm = document.querySelector(".add-todo-form")
const todoInput = addTodoForm.querySelector("input[type='text']")

function addTodoItem(todoText) {
  const todoItem = document.createElement("li")
  todoItem.classList.add("todo-item")
  todoItem.innerHTML = `
    <input type="checkbox" />
    <span>${todoText}</span>
    <button>Delete</button>
  `
  todoList.appendChild(todoItem)

  // Add event listener for delete button
  const deleteButton = todoItem.querySelector("button")
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(todoItem)
  })
}

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const todoText = todoInput.value.trim()
  if (todoText !== "") {
    addTodoItem(todoText)
    todoInput.value = ""
  }
})
