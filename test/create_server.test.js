describe("HTTP Server", async function () {
  let server;
  var chai = await import("chai");
  var chaiHttp = await import("chai-http");
  var http = await import("http");
  // Import the module or function that creates the HTTP server
  var { create_server } = await import("../modules/create_server.js");

  // Configure Chai to work with HTTP
  chai.use(chaiHttp);
  const expect = chai.expect;

  // Start the server before running tests
  before(function (done) {
    server = http.createServer(create_server);
    server.listen(3000, done); // Start the server on port 3000
  });

  // Stop the server after running tests
  after(function (done) {
    server.close(done); // Close the server
  });

  // Test for a valid response
  it("should return a valid response", function (done) {
    chai
      .request(server)
      .get("/") // Make a GET request to the root endpoint
      .end(function (err, res) {
        expect(err).to.be.null; // Assert that there's no error
        expect(res).to.have.status(200); // Assert that the response status code is 200 OK
        expect(res).to.be.html; // Assert that the response is HTML

        /**
         * TODO:
         * This part should only temporarily be in this test, because the print_request
         * currently is more of a test function and in the future this will be
         * actually filling in html.
         */
        expect(res.text).to.include("<p>"); // Check for the presence of <p> tags
        expect(res.text).to.include("Key:"); // Check for the presence of 'Key:' text

        done();
      });
  });
});
