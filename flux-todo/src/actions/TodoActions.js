// This file has all the actions that we can do in the app
// For example - adding or deleting a todo

import Dispatcher from "../dispatcher/Dispatcher";

const TodoActions = {
  // when user adds a new todo
  addTodo(text) {
    Dispatcher.dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  },

  // when user deletes a todo
  deleteTodo(index) {
    Dispatcher.dispatch({
      type: "DELETE_TODO",
      payload: index,
    });
  },
};

export default TodoActions;
