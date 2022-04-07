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
  div.classList.add('card');
  let adentro = document.createElement('div');
  adentro.classList.add('card-body');

  let botonera = document.createElement('div');
  div.classList.add('botonera');
  let testos = document.createElement('div');
  let borrar = document.createElement('button');
  let title = document.createElement('h3');
  let desc = document.createElement('p');
  /*let checkbox = document.createElement('checkbox');*/
  //let seeToDo = document.createElement('div')
  let article = document.createElement('article');

  div.id = `todo-${todo.id}`;
  div.classList.add("sameLine");
  borrar.id = `borrar-${todo.id}`;
  title.id = `title-${todo.id}`;
  desc.id = `desc-${todo.id}`;
  article.id = `complete-${todo.id}`;
  // seeToDo.id = `see-${todo.id}`;
  article.id = `article-${todo.id}`;

  borrar.innerHTML = '';
  borrar.innerHTML = "Borrar";
  borrar.classList.add("deleteButton");
  borrar.onclick = () => {
    BorrarTodo(todo.id)
  }

  title.innerText = todo.name;
  desc.innerText = todo.desc;

  article.onclick = () => {
    ToggleTodo(todo.id)
  }
  // seeToDo.innerHTML =
  //   `  <h1>SE ESTA MOSTRANDOOO</h1>
  //       <button type="button" class="btn justify-content-end" data-toggle="modal" data-target="#openModal">
  //       </button>
  // `;
  // /*por que no se muestra este iconnnn*/
  article.classList.add("feature1");
  article.innerHTML = `
  <input type="checkbox" id="feature1"/>
  <div>
    <span>
      Completar
    </span>
  </div>

  `
  

  testos.appendChild(title);
  testos.appendChild(desc);
  testos.classList.add('spageti');
  adentro.appendChild(testos);
  
  botonera.appendChild(borrar);
  botonera.appendChild(article);

  adentro.appendChild(botonera);

  div.appendChild(adentro);

  
  /*div.appendChild(checkbox);*/

  div_todos.appendChild(div);
}

function BorrarTodo(id) {
  const div_borrar = document.querySelector(`#todo-${id}`);
  div_todos.removeChild(div_borrar);
  let e = EncontrarTodoXId(id);
  e.deleted = true;
}

function ToggleTodo(id) {
  const div_completed = document.querySelector(`#todo-${id}`);

  // let i = todos.findIndex(todo => todo.id === id);
  let e = EncontrarTodoXId(id);

  if (e.completed) {
    div_completed.style.color = 'black';
    todos[id].completed = false;
    todos[id].finished = null;
  } else {
    div_completed.style.color = 'green';
    todos[id].completed = true;
    todos[id].finished = new Date();
  }
}

function MostrarTodoMasRapido() {
  const e = EncontrarTodoMasRapido();
  console.log(e);

  if (e === 0 || e.deleted == true) {
    alert("No se completo ninguna tarea.");
  } else {
    alert(`El To Do "${e.name}" fue el completado mas rapido`);
  }

}

function EncontrarTodoMasRapido() {
  let r = 0;
  let e = 0;
  todos.forEach(todo => {
    if (todo.completed === true) {
      let a = todo.finished - todo.created;
      if (a > r) {
        r = a;
        e = EncontrarTodoXId(todo.id);
      }
    };
  });
  return e;
}


function ValidarCamposTodo() {
  if (nombre.value == '') {
    alert('falta nombre')
    return false
  }
}

function EncontrarTodoXId(id) {
  let e;
  todos.forEach(element => {
    if (element.id == id) {
      e = element;
    }
  });
  return e;
}