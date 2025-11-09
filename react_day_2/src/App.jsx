import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <Header />
      <UserList />
      <Footer />
    </main>
  );
}

export default App;
