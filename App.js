import { create_server } from "./modules/create_server.js";
import http from "http";

// We will be using the MERN stack
// MongoDB //todo install
// Express //todo install
// React   //todo install
// Nodejs  //     installed
//TODO: change this to https so we are securely handling passwords!
http.createServer(create_server).listen(8080);
