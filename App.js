import { create_server } from "./modules/create_server.js";
import http from "http";

http.createServer(create_server).listen(8080);
