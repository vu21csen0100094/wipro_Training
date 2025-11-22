import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";

/*
  Q4: Routing Setup
  ----------------------
  Route: /users/:id → Loads UserDetails component
*/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
