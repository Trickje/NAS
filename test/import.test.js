describe("Import", function () {
  it("should do a dynamic import", function (done) {
    const chai = import("chai");
    const expect = chai.expect;
    expect(null).to.be.null;
    done();
  });
});
