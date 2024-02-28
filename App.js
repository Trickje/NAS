import { create_server } from "./modules/create_server.js";
import http from "http";

//TODO: change this to https so we are securely handling passwords!
http.createServer(create_server).listen(8080);
