import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./LoginForm"; // Ensure LoginForm.tsx exists

const LoginButton = () => {
  const onClickLoginButton = () => {
    window.location.href = "/login";
  };

  return (
    <button className="LoginButton" onClick={onClickLoginButton}>
      Login existing account
    </button>
  );
};

const RegisterButton = () => {
  const onClickRegisterButton = () => {
    window.location.href = "/register";
  };

  return (
    <button className="RegisterButton" onClick={onClickRegisterButton}>
      Register new account
    </button>
  );
};

// Ensure the root element exists in your HTML file
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <div className="main">
    <h1>Welcome to NAS!</h1>
    <p>
      To make use of NAS, you need to log in with your account or register a new
      account using the options below.
    </p>
    <LoginButton />
    <RegisterButton />
  </div>
);
