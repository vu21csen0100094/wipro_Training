/* QUETION 1 : React Basics (JSX, Components, Props)

import React from "react";
import ReactDOM from "react-dom/client";
import ProductCard from "./Q1_ProductCard/ProductCard";

// Q1 Demo Component
const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Q1 - Product Card</h2>

      {// Passing props here }
      <ProductCard title="Laptop" price={30000} discount={15000} />
      <ProductCard title="water bottle" price={800} discount={200} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */


/* Quetion 2: React State + Controlled and Uncontrolled Components
import React from "react";
import ReactDOM from "react-dom/client";
import LoginCU from "./Q2_LoginControlledUncontrolled/LoginCU";

// Q2 Demo Component
const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Q2 - Controlled & Uncontrolled Login Form</h2>

      {// Login Form (Username controlled, Password uncontrolled) }
      <LoginCU />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */


/* Question 3: React Class Component, Lifecycle, PropTypes, Styling
import React from "react";
import ReactDOM from "react-dom/client";
import UserStatus from "./Q3_UserStatus/UserStatus";

// Q3 Demo Component
const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Q3 - User Status (Class Component)</h2>

      {// Passing the required numeric prop userId }
      <UserStatus userId={101} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */

/*Q4. React Router + API Integration

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Q4_UserRouting/App";

// Q4 Demo (Routing with /users/:id)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */

/*Q5. Reusability Using HOC or Render Props
import React from "react";
import ReactDOM from "react-dom/client";
import DemoResponsive from "./Q5_HOC/DemoResponsive";

// Q5 Demo (HOC that shows window width)
const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Q5 - HOC Window Width Demo</h2>
      <DemoResponsive />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */

import React from "react";
import ReactDOM from "react-dom/client";
import FormikLogin from "./Q6_FormikYupLogin/FormikLogin";

// Q6 Demo (Formik + Yup Login Form)
const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Q6 - Formik + Yup Login Form</h2>
      <FormikLogin />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
