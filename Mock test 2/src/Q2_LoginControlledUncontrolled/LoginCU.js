import React, { useState, useRef } from "react";

/*
  Q2: Login Form
  --------------------------------------
  - Username = Controlled input (value controlled by React)
  - Password = Uncontrolled using useRef (value taken directly from DOM)
  - On submit ➝ display both values in console
*/

const LoginCU = () => {
  // Controlled input for username
  const [username, setUsername] = useState("");

  // Uncontrolled password using ref
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordValue = passwordRef.current.value;

    console.log("Username:", username);
    console.log("Password:", passwordValue);

    // Reset both fields
    setUsername("");
    passwordRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", width: "250px", gap: "8px" }}
    >
      <input
        type="text"
        placeholder="Username (Controlled)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password (Uncontrolled)"
        ref={passwordRef}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginCU;
