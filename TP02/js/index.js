class Todo {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        const timestamp = new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM
        this.timestamp = timestamp;
        this.completed = false;
        this.id = null;
    }
}


let todos = [];

const div_todos = document.querySelector('#todos');
const nombre = document.querySelector('#task-name');
const desc = document.querySelector('#task-description');
const divTodoList = document.querySelector('#todo-list');
const btn = document.querySelector('#save-task');

btn.addEventListener('click', (evnt) => {
    // validar campos
    let validado = ValidarCamposTodo();
    if (validado == false) {
        return false;
    }
    // crea un todo
    let todo = new Todo(nombre.value, desc.value);
    // agreagar el todo al array
    todos.push(todo);
    todo.id = todos.indexOf(todo);
    // actualizar los todos del dom
    MostrarTodo(todo);
    // limpiar los inputs
});


function MostrarTodo(todo) {
    let div = document.createElement('div');
    let title = document.createElement('h3');
    let desc = document.createElement('p');
    let borrar = document.createElement('button');
    let complete = document.createElement('button');

    div.id = `todo-${todo.id}`;
    title.id = `title-${todo.id}`;
    desc.id = `desc-${todo.id}`;
    borrar.id = `borrar-${todo.id}`;
    complete.id = `complete-${todo.id}`;



    title.innerText = todo.name;
    desc.innerText = todo.desc;
    borrar.innerHTML = `<button onclick="BorrarTodo(${todo.id})">Borrar</button>`;
    complete.innerHTML = `<button onclick="CompleteTodo(${todo.id})">Finalizar</button>`;

    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(borrar);
    div.appendChild(complete);

    div_todos.appendChild(div);
}




function BorrarTodo(id) {
    const div_borrar = document.querySelector(`#todo-${id}`);
    div_todos.removeChild(div_borrar);
    todos.splice(id);
}

function CompleteTodo(id) {
    const div_completed = document.querySelector(`#todo-${id}`);
    div_completed.style.color = 'red';

    todos[id].completed = true;

}



//
// const div_todos = document.querySelector('#todos');
// let todosHtml = div_todos.childNodes;
// todosHtml.forEach(todoHtml => {
//     children = todoHtml.childNodes;
//     console.log
// });

// //

function ValidarCamposTodo() {
    if (nombre.value == '') {
        alert('falta nombre')
        return false
    }
}