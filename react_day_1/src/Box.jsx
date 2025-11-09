// src/Box.jsx
import React from "react";

function Box({ image, title, description }) {
  return (
    <div
      style={{
        background: "#222",
        borderRadius: "12px",
        padding: "1rem",
        textAlign: "center",
        color: "#fff",
        width: "200px",
        marginBottom: "1rem",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ marginTop: "0.6rem" }}>{title}</h3>
      <p style={{ fontSize: "0.85rem", color: "#bbb" }}>{description}</p>
    </div>
  );
}

export default Box;
