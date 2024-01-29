/**
 * This is a test that just checks a standard function in JavaScript. If this test fails SHTF.
 * This is tested with Mocha
 */
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", async function () {
      const { expect } = await import("chai");
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});
