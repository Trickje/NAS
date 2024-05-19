// Import necessary modules
import { JSDOM } from "jsdom";

// Function to create login form DOM elements
function createLoginFormElements(document) {
  // Create login form
  var loginForm = document.createElement("form");
  loginForm.setAttribute("id", "loginForm");
  loginForm.setAttribute("action", "/login"); // Will be overridden but is a fallback
  loginForm.setAttribute("method", "post"); // Set method to POST
  loginForm.addEventListener("submit", function (ev) {
    ev.preventDefault(); // To not navigate.

    const formData = new FormData(loginForm);

    fetch("/login", {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        //todo handle response data
        console.log("Success: ", data);
        //todo redirect or update the UI based on the response
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  });

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

function createErrorMessage(document, msg) {
  var errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message"); // Adding a class for styling

  // Setting the message content
  errorMessage.textContent = msg;

  // Appending the error message to the document body
  document.body.appendChild(errorMessage);
}

function createStyleSheet(document) {
  // Create a <style> element
  var styleElement = document.createElement("style");

  // Add CSS rules to the style element
  styleElement.textContent = `
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }

    .login-form {
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
      width: 300px;
    }

    .login-form input[type="text"],
    .login-form input[type="password"],
    .login-form button {
      display: block;
      margin: 10px 0;
      width: 100%;
      padding: 8px;
      border-radius: 3px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .login-form button {
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
    }
    .error-message {
      color: red;
      border: 1px solid red;
      padding: 10px;
      margin: 10px 0;
    }

  `;

  // Append the style element to the head of the document
  document.head.appendChild(styleElement);
}

// Function to create login page DOM tree
export function createLoginPage(errorMsg) {
  // Create a new DOM window
  var dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
  var { document } = dom.window;
  // Create login form elements
  var loginForm = createLoginFormElements(document);

  // Append form to body
  document.body.appendChild(loginForm);

  if (errorMsg) {
    createErrorMessage(document, errorMsg);
  }

  // Create and append the stylesheet
  createStyleSheet(document);

  // Return the login form HTML
  return dom.serialize();
}
