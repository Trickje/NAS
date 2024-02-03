// this will be the password regex check
import { check_password } from "../modules/check_password.js";
import * as assert from "assert";

describe("Password check test", () => {
  it("needs to pass a simple password", (done) => {
    const password = "MyP@ssw0rd";
    assert.strictEqual(check_password(password), true);
    done();
  });

  it("needs to pass a complex password", (done) => {
    const password = "Myp@ssw0rd021300i8412344D";
    assert.strictEqual(check_password(password), true);
    done();
  });

  it("needs to fail a password that is 7 characters or less", (done) => {
    const password = "MyP@ssw"; // 7 characters
    assert.strictEqual(check_password(password), false);
    done();
  });

  it("needs to fail a password that does not have a special character", (done) => {
    const password = "MyPassw0rd"; // No special character
    assert.strictEqual(check_password(password), false);
    done();
  });

  it("needs to fail a password that does not have a digit", (done) => {
    const password = "MyP@ssword"; // No digits
    assert.strictEqual(check_password(password), false);
    done();
  });

  it("needs to fail a password that attempts an SQL injection", (done) => {
    const password = '" OR ""="'; // SQL injection attempt
    assert.strictEqual(check_password(password), false);
    done();
  });
});
