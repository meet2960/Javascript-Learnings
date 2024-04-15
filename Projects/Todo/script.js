const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTodo(event) {
  event.preventDefault();
  console.dir(input);
  const newTodo = input.value.trim();

  if (newTodo) {
    const li = document.createElement("li");
    const randomId = Math.floor(Math.random() * 10000);

    li.setAttribute("id", randomId);
    li.setAttribute("class", "list-group-item");
    li.textContent = newTodo;
    todoList.appendChild(li);
    input.value = "";
    li.addEventListener("click", function (e) {
      console.dir(e);
      if (this.id) {
        todoList.removeChild(e.target);
      }
    });
  } else {
    alert("Please add some text...!!!");
  }
}
