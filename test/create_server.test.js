describe("HTTP Server", function () {
  var { create_server } = import("../modules/create_server.js");

  let server;
  var serverResponse;
  // Start the server before running tests
  before(function () {
    console.log("running  the before");
    var http = require("http");
    server = http.createServer(create_server);
    //server.listen(3000); // TODO: this is hijacking the thread and making a timeout.. Wait for a response and then with the response unsubscribe the listener Start the server on port 3000
  });

  // Stop the server after running tests
  after(function () {
    console.log("running  the after");
    server.close(); // Close the server
  });

  // Test for a valid response
  it("should return a valid response", function (done) {
    done();
  });
});
