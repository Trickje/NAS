import { check_email } from "../modules/check_email.js";
import assert from "assert";

describe("Email Validation", function () {
  it("should return true for valid email addresses", function () {
    assert.strictEqual(check_email("example@example.com"), true);
    assert.strictEqual(check_email("valid_email123@domain.co"), true);
    assert.strictEqual(check_email("no_spaces_in@address.com"), true);
    assert.strictEqual(check_email("user+name@email.co"), true);
    assert.strictEqual(check_email("user.name@company.info"), true);
  });

  it("should return false for invalid email addresses", function () {
    assert.strictEqual(check_email("invalid.email@"), false);
    assert.strictEqual(check_email("another.invalid.email@domain"), false);
    assert.strictEqual(check_email("spaces in@address.com"), false);
    assert.strictEqual(check_email("missing@dotcom"), false);
    assert.strictEqual(check_email("@missingusername.com"), false);
    assert.strictEqual(check_email("user@name@company.com"), false);
  });

  it("should return false for email addresses with whitespace at the beginning or end", function () {
    assert.strictEqual(check_email(" example@example.com"), false);
    assert.strictEqual(check_email("valid_email123@domain.co "), false);
  });

  it("should return false for email addresses with consecutive dots in the domain part", function () {
    assert.strictEqual(check_email("user@domain..com"), false);
  });

  it("should return false for email addresses with invalid characters", function () {
    assert.strictEqual(check_email("user@dom$ain.com"), false);
    assert.strictEqual(check_email("user[dot]name@company.com"), false);
  });

  it("should return false for email addresses with an incomplete TLD", function () {
    assert.strictEqual(check_email("user@domain.c"), false);
  });

  it("should return false for email addresses with very long parts", function () {
    assert.strictEqual(check_email("a".repeat(65) + "@domain.com"), false);
    assert.strictEqual(check_email("user@" + "a".repeat(256) + ".com"), false);
  });

  it("should return false for internationalized email addresses", function () {
    assert.strictEqual(check_email("user@üñîçødé.com"), false);
  });
});
