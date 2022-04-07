class Todo {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        
        const timestamp = new Date();
        this.created = timestamp;
        this.finished = null;
        
        this.completed = false;
        this.id = null;
        this.deleted = false;
    }
}