import { print_request } from "./print_request.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
export function create_server(req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  print_request(req, res);
  res.end("Hello World!");
}
