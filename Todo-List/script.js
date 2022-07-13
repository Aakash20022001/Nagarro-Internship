const form = document.getElementById("form");
const input = document.getElementById("input");
const todosList = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Check if there is any todo in localStorage and add them to the list
if(todos) {
    todos.forEach(todo => addTodo(todo));
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});
function addTodo(todo) {
    let todoText = input.value;
    if(todo) {
        todoText = todo.text
    }
    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todoText;
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateList();
        });
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateList();
        });
        todosList.appendChild(todoEl);
        input.value = '';
        updateList();
    }
}

function updateList() {
    todosEl = document.querySelectorAll('li');
    const todos = [];
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    });
    localStorage.setItem('todos', JSON.stringify(todos))
}
