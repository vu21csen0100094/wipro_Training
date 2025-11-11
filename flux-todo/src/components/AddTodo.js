// This part is where user types a todo and clicks Add
// When we click Add, it sends the data to the store through action

import React, { useState } from "react";
import TodoActions from "../actions/TodoActions";

const AddTodo = () => {
  const [text, setText] = useState("");

  // when we click add button
  const handleAdd = () => {
    if (text.trim() === "") return; // stop if input is empty
    TodoActions.addTodo(text); // send action to add todo
    setText(""); // clear input box
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
