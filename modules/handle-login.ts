import User from "../models/User.js"; // Import the User model
import { Request, Response } from "express";

export async function handleLogin(request: Request, response: Response) {
  try {
    const { username, password } = request.body;

    // Find user in the database
    const user = await User.findOne({ username });
    const invalidUsernamePasswordError = "Invalid username or password";

    if (!user) {
      return response.status(401).json({ error: invalidUsernamePasswordError });
    }

    // Compare entered password with hashed password in DB
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return response.status(401).json({ error: invalidUsernamePasswordError });
    }

    console.log("Login successful:", user);
    // Login successful
    return response.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
}
