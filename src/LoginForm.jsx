import React, { useState } from "react";

function PasswordField({ setPassword }) {
  return (
    <div className="PasswordField">
      <label htmlFor="passwordfield">Password</label>
      <input
        type="password"
        id="passwordfield"
        name="passwordfield"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}

function UserNameField({ setUsername }) {
  return (
    <div className="UsernameField">
      <label htmlFor="usernamefield">Username</label>
      <input
        type="text"
        id="usernamefield"
        name="usernamefield"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

function RegisterField({ username, password }) {
  function onClickRegister() {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  }

  return (
    <div>
      <a href="/register" className="Register">
        Register new account
      </a>
      <button onClick={onClickRegister}>Register</button>
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="LoginForm">
      <UserNameField setUsername={setUsername} />
      <PasswordField setPassword={setPassword} />
      <RegisterField username={username} password={password} />
    </div>
  );
}

export default LoginForm;
