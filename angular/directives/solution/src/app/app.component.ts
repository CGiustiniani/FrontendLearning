import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";

@Component({
    selector: "todo-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    getTodoItems() {
        return this.model.items;
    }

     areUnresolvedItems() {
        return this.model.items.filter(i => !i.done).length > 0;
    }

    getClassMap(key: number): Object
    {
       let item = this.model.items[key];
       let result =
       {
         "bg-success": item.done,
         "bg-warning": !item.done
       }

       return result;
    }   
}