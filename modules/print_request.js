const CircularJSON = require("circular-json");
/**
 * @summary This is just to print the enitire request as a result in the http request.
 * @param {*} req is the req that is passed from the createServer callback
 * @param {*} res is the res that is passed from the createServer callback
 */
exports.print_request = function (req, res) {
  for (let key in req) {
    if (req.hasOwnProperty(key)) {
      const val =
        typeof req[key] === "object"
          ? CircularJSON.stringify(req[key])
          : req[key];
      res.write("<p>Key: " + key + ", Value: " + val + "</p>");
    }
  }
};
