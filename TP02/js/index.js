class Todo
{
    constructor(name, desc){
        this.name = name;
        this.desc = desc;
        const timestamp = new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM
        this.timestamp = timestamp;
    }
}


let todos = [];


function CreateTodo() {
    const name = document.querySelector('task-name');
    const desc = document.querySelector('task-description');
    const btn = document.querySelector('save-task');

    btn.addEventListener('click', ()=> {
        //lol
    });
}

let a = new Todo('name', 'desc');
console.log(a.timestamp);
console.log(a.name);