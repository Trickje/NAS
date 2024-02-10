// Import necessary modules
import { JSDOM } from "jsdom";

// Function to create login form DOM elements
function createLoginFormElements(document) {
  // Create login form
  var loginForm = document.createElement("form");
  loginForm.setAttribute("id", "loginForm");
  loginForm.setAttribute("action", "/login");
  loginForm.setAttribute("method", "post"); // Set method to POST

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

  return loginForm;
}

/*
// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default form submission
  console.log("Form submission event triggered."); // Add console log
  const formData = new FormData(this); // Get form data
  console.log("Form data:", formData); // Add console log
  fetch("/login", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("Response received from server:", response); // Add console log
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Login failed");
      }
    })
    .then((data) => {
      // Display response
      console.log("Server response:", data); // Add console log
      document.body.innerHTML = data;
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
}*/

// Function to create login page DOM tree
export function createLoginPage() {
  // Create a new DOM window
  var dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
  var { document } = dom.window;
  // Create login form elements
  var loginForm = createLoginFormElements(document);

  // Append form to body
  document.body.appendChild(loginForm);

  // Return the login form HTML
  return dom.serialize();
}
