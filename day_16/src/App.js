import React from "react";
import Counter from "./components/Counter.js";
import Clock from "./components/Clock.js";
import DataFetcher from "./components/DataFetcher"; // new component

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My React Hooks Demo</h1>
      <Counter />
      <Clock />
      <DataFetcher /> {/* 👈 Added below the Clock */}
    </div>
  );
}

export default App;
