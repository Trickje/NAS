import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./LoginForm";

// Testing document to see if React works with transpilation.
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <div className="main">
      <h1>Log in to your NAS account!</h1> <br />
      <LoginForm />
    </div>
  );
}
