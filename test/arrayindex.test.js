import { expect } from "chai";
/**
 * This is a test that just checks a standard function in JavaScript. If this test fails SHTF.
 */
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      expect([1, 2, 3].indexOf(4)).to.equal(1); //I changed this to intentionally break the tests.
    });
  });
});
