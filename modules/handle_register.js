import { validatePasswordRequirements } from "./check_password.js";

export async function handleRegister(request) {
  try {
    console.log("Request Body:", request.body); // Log the parsed JSON data
    let account = request.body;
    let password = account.password;
    if (validatePasswordRequirements(password)) {
      return { message: "Password created.", username: account.username };
    } else {
      return { error: "Invalid password" };
    }
  } catch (error) {
    console.error("Error parsing request body:", error);
    return { error: "Invalid request" };
  }
}
