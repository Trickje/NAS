import LoginForm from "./LoginForm"; //To fix maybe use WebPack?

//Testing document to see if React works with transpilation.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <h1>Welcome to the login screen!</h1> <br />
    <LoginForm />
  </div>
);
console.log("Hello, World!");
