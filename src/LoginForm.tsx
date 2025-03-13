import React, { useState } from "react";

interface InputFieldProps {
  setValue: (value: string) => void;
}

const PasswordField = ({ setValue }: InputFieldProps) => {
  return (
    <div className="PasswordField">
      <label htmlFor="passwordfield">Password</label>
      <input
        type="password"
        id="passwordfield"
        name="passwordfield"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const UserNameField = ({ setValue }: InputFieldProps) => {
  return (
    <div className="UsernameField">
      <label htmlFor="usernamefield">Username</label>
      <input
        type="text"
        id="usernamefield"
        name="usernamefield"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

interface LoginFieldProps {
  username: string;
  password: string;
}

const LoginField = ({ username, password }: LoginFieldProps) => {
  const onClickLogin = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="LoginField">
      <button onClick={onClickLogin}>Login</button>
    </div>
  );
};

const RegisterField = () => {
  const onClickRegister = () => {
    window.location.href = "/register";
  };

  return (
    <div className="RegisterField">
      Don't have an account yet?
      <button onClick={onClickRegister}>Register</button>
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="LoginForm">
      <UserNameField setValue={setUsername} />
      <PasswordField setValue={setPassword} />
      <LoginField username={username} password={password} />
      <RegisterField />
    </div>
  );
};

export default LoginForm;
