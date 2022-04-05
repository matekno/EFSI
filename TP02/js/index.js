let todos = [];

const div_todos = document.querySelector('#todos');
const nombre = document.querySelector('#task-name');
const desc = document.querySelector('#task-description');
const divTodoList = document.querySelector('#todo-list');
const btn = document.querySelector('#save-task');
const modal = document.querySelector('.modal');


function GuardarTodo() {
  // evnt.preventDefault();
  // validar campos
  console.log(nombre)
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
}


function MostrarTodo(todo) {
  let div = document.createElement('div');
  let title = document.createElement('h3');
  let desc = document.createElement('p');
  let borrar = document.createElement('button');
  let checkbox = document.createElement('checkbox');

  div.id = `todo-${todo.id}`;
  title.id = `title-${todo.id}`;
  desc.id = `desc-${todo.id}`;
  borrar.id = `borrar-${todo.id}`;
  checkbox.id = `complete-${todo.id}`;



  title.innerText = todo.name;
  desc.innerText = todo.desc;
  borrar.innerHTML = '';
  checkbox.innerHTML = '';
  borrar.innerHTML = `<button onclick="BorrarTodo(${todo.id})">Borrar</button>`;
  checkbox.innerHTML = `<input type="checkbox" onclick="ToggleTodo(${todo.id})">`;

  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(borrar);
  div.appendChild(checkbox);
  div_todos.appendChild(div);
}

/*
https://www.w3schools.com/howto/howto_js_todolist.asp


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task-name").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("toDosList").appendChild(li);
    }
    document.getElementById("task-name").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
*/



function BorrarTodo(id) {
  const div_borrar = document.querySelector(`#todo-${id}`);
  div_todos.removeChild(div_borrar);
  todos.splice(id);
}

function ToggleTodo(id) {
  const div_completed = document.querySelector(`#todo-${id}`);
  let e = EncontrarTodoXId(id);
  console.log(e);
  if (e.completed) {
    div_completed.style.color = 'black';
    todos[id].completed = false;
  }
  else{
    div_completed.style.color = 'green';
    todos[id].completed = true;
  }
}


function ValidarCamposTodo() {
  if (nombre.value == '') {
    alert('falta nombre')
    return false
  }
}

function EncontrarTodoXId(id) {
  let element;
  for (let i = 0; i < todos.length; i++) {
    if (i == id) {
      element = todos[i];
    }
  }
  return element
}