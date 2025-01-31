import { create_server } from "./modules/create_server.js";
import http from "http";
import { createRoot } from "react-dom/client";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

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
// Serve static files from the dist directory
app.use("public", express.static(path.join(__dirname, "dist/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/", "index.html"), (err) => {
    if (err) {
      console.error("Error serving page index.html: ", err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
