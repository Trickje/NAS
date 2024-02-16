// Import the createLoginPage function
import { createLoginPage } from "./login_page.js";
import fs from "fs";
import path from "path";

// Function to serve the login page
function serveLoginPage(req, res, errorMsg) {
  let filePath = "." + req.url;
  filePath = "./pages/login.html";

  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      if (errorMsg) {
        const injectedScript = `<script>displayErrorMessage("${errorMsg}");</script>`;
        content = content
          .toString()
          .replace("</body>", `${injectedScript}</body>`);
      }
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
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
      serveLoginPage(req, res, "Password and username combination is invalid.");
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
