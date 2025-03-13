import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { handleRegister } from "../modules/handle-register.js";
import { handleLogin } from "../modules/handle-login.js";
import mongoose from "mongoose";

const app = express();
const port: number = 8080;

// Convert import.meta.url to __dirname
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

// Mongo
const uri: string = "mongodb://localhost:27017/NAS";
mongoose
  .connect(uri, {})
  .then(() => console.log("MongoDB connected locally"))
  .catch((err: Error) => console.error("MongoDB connection error:", err));

// Serve static files from dist (for React build assets)
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

app.post("/api/register", async (req: Request, res: Response) => {
  try {
    const response = await handleRegister(req);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/login", (req: Request, res: Response) => {
  handleLogin(req, res);
});

app.listen(port, () => {
  console.log(`Express backend listening on port ${port}`);
});

export { app as viteNodeApp };
