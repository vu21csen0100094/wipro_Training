// src/FeedbackBox.jsx
import React, { useState } from "react";

function FeedbackBox() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      setSubmitted(true);
      setName("");
      setMessage("");
    }
  };

  return (
    <div
  style={{
    background: "#222",
    color: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    width: "230px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    minHeight: "250px", // keep uniform height
    minWidth: "300px"
  }}
>

      <h3>Feedback Form</h3>

      {submitted ? (
        <p style={{ color: "#9acd32" }}>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Your Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "none",
              marginBottom: "0.8rem",
            }}
          />

          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Message:
          </label>
          <textarea
            placeholder="Enter your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "none",
              height: "70px",
              marginBottom: "0.8rem",
              width: "220px", // or "60%" instead of "100%"

            }}
          />

          <button
            type="submit"
            style={{
              background: "#9acd32",
              color: "#000",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default FeedbackBox;
