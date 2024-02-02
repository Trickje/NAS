describe("HTTP Server", function () {
  var { create_server } = import("../modules/create_server.js");
  /* 
  let server;
  var responseData = "";
  var clientRequest;
  // Start the server before running tests
  before(function () {
    //console.log("running  the before");
    var http = require("http");
    server = http.createServer(create_server);
    server.listen(3000); // TODO: this is hijacking the thread and making a timeout.. Wait for a response and then with the response unsubscribe the listener Start the server on port 3000

    // Make a request to your server
    var options = {
      hostname: "localhost",
      port: 3000,
      path: "/",
      method: "GET",
    };

    console.log("going to make a request");

    clientRequest = http.request(options, (serverResponse) => {
      console.log("listening...");
      // Listen to the response from our server
      serverResponse.on("data", (chunk) => {
        responseData += chunk;
      });
      //TODO: finish setting up a proper serverResponse.
      serverResponse.setTimeout(5000, () => {
        server.close();
      });

      serverResponse.on("end", () => {
        console.log("Response from server:", responseData);
      });
    });

    clientRequest.on("error", (error) => {
      console.error("Error making request:", error.message);
    });

    // Send the request
    clientRequest.end();
  });

  // Stop the server after running tests
  after(function () {
    //TODO: implement cleanup
    //console.log("running  the after");
    server.close(); // Close the server
  });
 */
  // Test for a valid response
  it("should return a valid response", function (done) {
    const assert = require("node:assert").strict;

    // assert.notEqual(responseData, ""); //TODO: this test still needs some work.
    done();
  });
});
