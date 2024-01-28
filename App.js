import { create_server } from "./modules/create_server";
var http = require("http"); //This is to 'include' the http module

http.createServer(create_server).listen(8080);
