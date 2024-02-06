import { check_email } from "../modules/check_email.js";
import assert from "assert";

describe("Email Validation", function () {
  it("should return true for valid email addresses", function () {
    assert.strictEqual(check_email("example@example.com"), true);
    assert.strictEqual(check_email("valid_email123@domain.co"), true);
    assert.strictEqual(check_email("no_spaces_in@address.com"), true);
  });

  it("should return false for invalid email addresses", function () {
    assert.strictEqual(check_email("invalid.email@"), false);
    assert.strictEqual(check_email("another.invalid.email@domain"), false);
  });
});
