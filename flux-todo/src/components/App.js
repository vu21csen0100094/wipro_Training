// This is the main file which connects AddTodo and TodoList together
// It shows the title and both components in one place

import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "../index.css";

const App = () => {
  return (
    <div className="app fade">
      <h2>Flux Todo List</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
