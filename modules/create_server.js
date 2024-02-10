// Import the createLoginPage function
import { createLoginPage } from "./login_page.js";

// Function to serve the login page
function serveLoginPage(req, res) {
  const loginPageHTML = createLoginPage();
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(loginPageHTML);
}

// Function to handle POST request for login
function handleLogin(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const formData = new URLSearchParams(body);
    const username = formData.get("username");
    const password = formData.get("password");

    // Perform login validation (dummy example)
    if (username === "admin" && password === "password") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>Login Successful!</h1>");
    } else {
      res.writeHead(401, { "Content-type": "text/html" });
      res.end("<h1>Invalid username or password.</h1>");
    }
  });
}

// Function to handle other routes
function handleOtherRoutes(req, res) {
  res.writeHead(404, { "Content-type": "text/html" });
  res.end("<h1>404 Not Found</h1>");
}

// Function to create and handle the server
export function create_server(req, res) {
  // Check if the request is for the root URL
  if (req.url === "/") {
    serveLoginPage(req, res);
  } else if (req.method === "POST" && req.url === "/login") {
    handleLogin(req, res);
  }
  // Handle other routes
  else {
    handleOtherRoutes(req, res);
  }
}
