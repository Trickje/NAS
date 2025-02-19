import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./LoginForm";

//Testing document to see if React works with transpilation.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <h1>Welcome to the login screen!</h1> <br />
    <LoginForm />
  </div>
);
