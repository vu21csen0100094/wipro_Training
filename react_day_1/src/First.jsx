// src/First.jsx
import React, { useState } from "react";

function First({ name }) {
  // State to store and update current time
  const [time, setTime] = useState(new Date().toLocaleString());

  // Event handler to update the time
  const updateTime = () => {
    setTime(new Date().toLocaleString());
  };

  return (
    <section>
      <h2>JSX Example</h2>

      <p>
        Hello, I am <strong>{name}</strong> 👋 — I have completed my work on{" "}
        <em>{time}</em>.
      </p>

      <p>The sum of 5 + 3 is {5 + 3}</p>
      <strong>
        <p>The product of 5 * 3 is {5 * 3}</p>
      </strong>

      <p>
        Here I have used <code>{'{ name }'}</code> and{" "}
        <code>{'{ time }'}</code> — as props.
      </p>

      {/* Button with event handling */}
      <button
        onClick={updateTime}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Update Time 🕒
      </button>
    </section>
  );
}

export default First;
