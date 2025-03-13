import React, { useState } from "react";

interface InputFieldProps {
  setValue: (value: string) => void;
}

const UserNameField: React.FC<InputFieldProps> = ({ setValue }) => (
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

const EmailField: React.FC<InputFieldProps> = ({ setValue }) => (
  <div className="EmailField">
    <label htmlFor="emailfield">Email</label>
    <input
      type="email"
      id="emailfield"
      name="emailfield"
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

const PasswordField: React.FC<InputFieldProps> = ({ setValue }) => (
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

const ConfirmPasswordField: React.FC<InputFieldProps> = ({ setValue }) => (
  <div className="ConfirmPasswordField">
    <label htmlFor="confirmpasswordfield">Confirm Password</label>
    <input
      type="password"
      id="confirmpasswordfield"
      name="confirmpasswordfield"
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

const FullNameField: React.FC<InputFieldProps> = ({ setValue }) => (
  <div className="FullNameField">
    <label htmlFor="fullnamefield">Full Name</label>
    <input
      type="text"
      id="fullnamefield"
      name="fullnamefield"
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

const DateOfBirthField: React.FC<InputFieldProps> = ({ setValue }) => (
  <div className="DateOfBirthField">
    <label htmlFor="dateofbirthfield">Date of Birth</label>
    <input
      type="date"
      id="dateofbirthfield"
      name="dateofbirthfield"
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

interface RegisterFieldProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  dateOfBirth: string;
}

const RegisterField: React.FC<RegisterFieldProps> = ({
  username,
  email,
  password,
  confirmPassword,
  fullName,
  dateOfBirth,
}) => {
  const onClickRegister = () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        fullName,
        dateOfBirth,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="RegisterField">
      <button onClick={onClickRegister}>Register</button>
    </div>
  );
};

const LoginField: React.FC = () => {
  const onClickLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="LoginField">
      Already have an account? <button onClick={onClickLogin}>Login</button>
    </div>
  );
};

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <div className="RegisterForm">
      <UserNameField setValue={setUsername} />
      <EmailField setValue={setEmail} />
      <PasswordField setValue={setPassword} />
      <ConfirmPasswordField setValue={setConfirmPassword} />
      <FullNameField setValue={setFullName} />
      <DateOfBirthField setValue={setDateOfBirth} />
      <RegisterField
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        fullName={fullName}
        dateOfBirth={dateOfBirth}
      />
      <LoginField />
    </div>
  );
};

export default RegisterForm;
