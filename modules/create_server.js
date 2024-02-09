// Import the createLoginPage function
import { createLoginPage } from "./login_page.js";

// Function to create and handle the server
export function create_server(req, res) {
  // Check if the request is for the root URL
  if (req.url === "/") {
    // Serve the login page
    const loginPageHTML = createLoginPage();
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(loginPageHTML);
  } // Handle POST request for login
  else if (req.method === "POST" && req.url === "/login") {
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
  } else {
    // Handle other routes
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
}
