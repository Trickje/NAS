// Import necessary modules
import { JSDOM } from "jsdom";

// Function to create login page DOM tree
export function createLoginPage() {
  // Create a new DOM window
  var dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
  var { document } = dom.window;

  // Create login form
  var loginForm = document.createElement("form");
  loginForm.setAttribute("id", "loginForm");

  // Username field
  var usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username:";
  var usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("name", "username");

  // Password field
  var passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");

  // Submit button
  var submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Login");

  // Append elements to form
  loginForm.appendChild(usernameLabel);
  loginForm.appendChild(usernameInput);
  loginForm.appendChild(document.createElement("br"));
  loginForm.appendChild(passwordLabel);
  loginForm.appendChild(passwordInput);
  loginForm.appendChild(document.createElement("br"));
  loginForm.appendChild(submitButton);

  // Append form to body
  document.body.appendChild(loginForm);

  // Return the login form HTML
  return dom.serialize();
}
