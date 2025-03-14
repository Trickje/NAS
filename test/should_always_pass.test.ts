/**
 * This is a test that just checks a standard function in JavaScript. If this test fails SHTF.
 * This is tested with Mocha
 */
import * as assert from "assert";
import { it } from "mocha";
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function (done) {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
      done();
    });
  });
});
