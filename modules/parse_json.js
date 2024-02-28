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
