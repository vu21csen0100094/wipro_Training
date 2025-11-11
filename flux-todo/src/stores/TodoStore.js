// This file stores all our todos in memory
// It listens for actions from the Dispatcher and updates the data
// Then it tells the UI to update using "emit"

import { EventEmitter } from "events";
import Dispatcher from "../dispatcher/Dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = []; // list to store all todos

    // this runs every time a new action comes in
    Dispatcher.on("action", (action) => {
      switch (action.type) {
        case "ADD_TODO":
          // add new todo to the list
          this.todos.push(action.payload);
          this.emit("change"); // tell the view to update
          break;

        case "DELETE_TODO":
          // remove a todo by its index
          this.todos.splice(action.payload, 1);
          this.emit("change"); // tell the view to update
          break;

        default:
          break;
      }
    });
  }

  // this sends the todo list to the component
  getTodos() {
    return this.todos;
  }
}

export default new TodoStore();
