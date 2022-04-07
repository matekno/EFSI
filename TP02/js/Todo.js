class Todo {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        const timestamp = new Date().toLocaleString();
        this.timestamp = timestamp;
        this.completed = false;
        this.id = null;
        this.deleted = false;
    }
}