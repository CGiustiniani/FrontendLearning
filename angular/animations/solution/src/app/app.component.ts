import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";
import {HighlightTrigger } from "./table.animations"

@Component({
    selector: "todo-app",
    templateUrl: "app.component.html",
    animations:[HighlightTrigger]
})
export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    getTodoItems() {
        return this.model.items;
    }

    getRowState(state):string
    {
       return state ? "selected":"notselected"
    }

}