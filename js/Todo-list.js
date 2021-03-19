
//  Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//  Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteCheck);
document.addEventListener("DOMContentLoaded", getTodo);



// Functions

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //  Ceart LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    saveLocalTodos(todoInput.value)

    //  Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //  Check Trsh Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)
    //  Append Todo List
    todoList.appendChild(todoDiv);
    //  Clear Input
    todoInput.value = " ";


}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
        removeLocalTodos(todo);

    }



    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('complete');
    }


}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))

}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    console.log(todo)
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodo() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));

    }
        todos.forEach(function(todo) {
                    const todoDiv = document.createElement('div');
                    todoDiv.classList.add('todo');
                    //  Ceart LI
                    const newTodo = document.createElement('li');
                    newTodo.innerText = todo;
            newTodo.classList.add('todo-item');
            todoDiv.appendChild(newTodo)
            
                    //  Check Mark Button
                    const completedButton = document.createElement('button');
                    completedButton.innerHTML = '<i class="fas fa-check"></i>';
                    completedButton.classList.add('complete-btn');
                    todoDiv.appendChild(completedButton);

                    //  Check Trsh Button
                    const trashButton = document.createElement('button');
                    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
                    trashButton.classList.add('trash-btn');
                    todoDiv.appendChild(trashButton);
                    //  Append Todo List
                    todoList.appendChild(todoDiv)
    });
}


 


var myDate = Date();
document.querySelector('#date').textContent = myDate;

