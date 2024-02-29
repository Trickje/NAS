/**
 *
 * @param {*} req The request to parse the JSON from
 * @param {*} callback the callback function to call when it is done, it takes in an error and jsonData
 */
export function parseJSON(req, callback) {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData);
    } catch (error) {
      callback(error);
    }
  });
}
