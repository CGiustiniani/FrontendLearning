export class Model {
    user;
    items;
    
    constructor() {
        this.user = "Elena";
        this.items = [new TodoItem("Learn Angular", false),
                      new TodoItem("Learn CSS", false),
                      new TodoItem("Buy a sofa", false)]
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
