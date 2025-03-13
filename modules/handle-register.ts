import { validatePasswordRequirements } from "./check-password.js";
import User from "../models/User.js";
import { Request } from "express";

export async function handleRegister(request: Request) {
  try {
    console.log("Request Body:", request.body); // Log the parsed JSON data
    let account = request.body;
    let password = account.password;
    let username = account.username;
    if (validatePasswordRequirements(password)) {
      const user = new User({ username, password });
      await user.save();
      return { message: "Password created.", username: username };
    } else {
      return { error: "Invalid password" };
    }
  } catch (error) {
    console.error("Error parsing request body:", error);
    return { error: "Invalid request" };
  }
}
