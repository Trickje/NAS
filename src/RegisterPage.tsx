import React from "react";
import ReactDOM from "react-dom/client";
import RegisterForm from "./RegisterForm";

//Testing document to see if React works with transpilation.
const domElement = document.getElementById("root");
if (domElement) {
  const root = ReactDOM.createRoot(domElement as HTMLElement);
  root.render(
    <div className="main">
      <h1>Register your new NAS account!</h1> <br />
      <RegisterForm />
    </div>
  );
}
