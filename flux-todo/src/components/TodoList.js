// This part shows the list of todos
// It listens to the store and updates whenever a todo is added or deleted

import React, { useEffect, useState } from "react";
import TodoStore from "../stores/TodoStore";
import TodoActions from "../actions/TodoActions";

const TodoList = () => {
  const [todos, setTodos] = useState(TodoStore.getTodos());

  // this runs only once when the page loads
  useEffect(() => {
    // update todos when something changes in store
    const updateTodos = () => setTodos([...TodoStore.getTodos()]);

    // listen for changes from store
    TodoStore.on("change", updateTodos);

    // cleanup when we leave the page
    return () => TodoStore.removeListener("change", updateTodos);
  }, []);

  return (
    <div className="todo-list">
      <h3>My Todos</h3>
      <ul>
        {todos.length === 0 ? (
          <p>No todos yet!</p>
        ) : (
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              {/* delete button to remove todo */}
              <button
                className="delete-btn"
                onClick={() => TodoActions.deleteTodo(index)}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
