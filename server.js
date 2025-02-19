import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { handleRegister } from "./modules/handle_register.js";
const app = express();
const port = 8080;

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

// We will be using the MERN stack
// MongoDB //todo install
// Express //     installed
// React   //     installed
// Nodejs  //     installed
//TODO: change this to https so we are securely handling passwords!
// //http.createServer(create_server).listen(8080);
// Serve static files from dist (for React build assets)
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

app.post("/api/register", (req, res) => {
  handleRegister(req).then((response) => {
    console.log(response);
    res.status(201).json(response);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"), (err) => {
    if (err) {
      console.error("Error serving page index.html: ", err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// Use ES Module syntax
export { app as viteNodeApp };
