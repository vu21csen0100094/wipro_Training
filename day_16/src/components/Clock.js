import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        marginTop: "10px",
        fontSize: "20px",
        color: "#333",
      }}
    >
      <h3>Current Time: {time}</h3>
    </div>
  );
}

export default Clock;
