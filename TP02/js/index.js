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
  let validado = ValidarCamposTodo();
  if (validado == false) {
    return false;
  }


  // crea un todo
  let todo = new Todo(nombre.value, desc.value);
  // agreagar el todo al array
  todos.push(todo);
  todo.id = todos.indexOf(todo);
  //limpia los inputs
  nombre.value = '';
  desc.value = '';
  // actualizar los todos del dom
  MostrarTodo(todo);
}

function MostrarTodo(todo) {
  let div = document.createElement('div');
  let borrar = document.createElement('button');
  let title = document.createElement('h3');
  let desc = document.createElement('p');
  let checkbox = document.createElement('checkbox');
  let seeToDo = document.createElement('div')

  div.id = `todo-${todo.id}`;
  borrar.id = `borrar-${todo.id}`;
  title.id = `title-${todo.id}`;
  desc.id = `desc-${todo.id}`;
  checkbox.id = `complete-${todo.id}`;
  seeToDo.id = `see-${todo.id}`;

  borrar.innerHTML = '';
  borrar.innerHTML = "Borrar";
  borrar.classList.add("deleteButton");
  borrar.onclick = () => {
    BorrarTodo(todo.id)
  }
  title.innerText = todo.name;
  desc.innerText = todo.desc;
  checkbox.innerHTML = '';
  checkbox.innerHTML = `<input type="checkbox" onclick="ToggleTodo(${todo.id})">`;
  seeToDo.innerHTML = `  <h1>SE ESTA MOSTRANDOOO</h1>
  <button type="button" class="btn justify-content-end" data-toggle="modal" data-target="#openModal">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> 
    <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/>
  </svg>
</button>
  `;
  /*por que no se muestra este iconnnn*/






  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(borrar);
  div.appendChild(checkbox);
  div_todos.appendChild(div);
}

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
  } else {
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