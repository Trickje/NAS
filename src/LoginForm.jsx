function PasswordField() {
  return (
    <div className="PasswordField">
      <label htmlFor="passwordfield">Password</label>
      <input type="password" id="passwordfield" name="passwordfield" />
    </div>
  );
}

function UserNameField() {
  return (
    <div className="UsernameField">
      <label htmlFor="usernamefield">Username</label>
      <input type="text" id="usernamefield" name="usernamefield" />
    </div>
  );
}

function onClickRegister() {
  fetch("/api/register")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("Error:", err));
}

function RegisterField() {
  //! Should do a post
  return (
    <div>
      <a href="/register" className="Register">
        Register new account
      </a>
      <button onClick={onClickRegister}>Button</button>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="LoginForm">
      <UserNameField />
      <PasswordField />
      <RegisterField />
    </div>
  );
}
export default LoginForm;
