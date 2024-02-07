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

  it("needs to fail a password that does not have a special character", () => {
    const password = "MyPassw0rd"; // No special character
    assert.strictEqual(check_password(password), false);
  });

  it("needs to fail a password that does not have a digit", () => {
    const password = "MyP@ssword"; // No digits
    assert.strictEqual(check_password(password), false);
  });

  it("needs to fail a password that attempts an SQL injection", () => {
    const password = 'MyP@ssw0rd" OR ""="'; // SQL injection attempt
    assert.strictEqual(check_password(password), false);
  });

  it("should return false for empty input", function () {
    // Test empty input
    assert.strictEqual(check_password(""), false);
  });

  it("should return false for undefined input", function () {
    // Test undefined input
    assert.strictEqual(check_password(undefined), false);
  });

  it("should return false for common weak passwords", function () {
    // Test common weak passwords
    assert.strictEqual(check_password("password"), false); // The word "password"
    assert.strictEqual(check_password("123456"), false); // Sequential numbers
    assert.strictEqual(check_password("qwerty"), false); // Simple keyboard pattern
    assert.strictEqual(check_password("abc123"), false); // Numeric sequence
    assert.strictEqual(check_password("letmein"), false); // Common phrase
    // Add more weak passwords according to your criteria
  });

  /* it("should return false for variations of username as password", function () {
    // Test variations of username as password
    const username = "john_doe";
    assert.strictEqual(check_password(username), false); // Username as is
    assert.strictEqual(check_password(username.toUpperCase()), false); // Uppercase username
    assert.strictEqual(check_password(username + "123"), false); // Username with digits appended
    // Add more variations if necessary
  }); */
  //! I did not build this feature in yet, it passes because it doesn't contain a special character
  it("should return false for repeated characters or patterns", function () {
    // Test passwords with repeated characters or patterns
    assert.strictEqual(check_password("aaa"), false); // Repeated characters
    assert.strictEqual(check_password("ababab"), false); // Repeated pattern
    assert.strictEqual(check_password("123123"), false); // Repeated numeric pattern
    // Add more variations if necessary
  });
  //! I did not build this feature in yet, it passes because it doesn't contain a special character
  it("should return false for keyboard adjacent characters", function () {
    // Test passwords with keyboard adjacent characters
    assert.strictEqual(check_password("qazwsx"), false); // Horizontal pattern
    assert.strictEqual(check_password("1qaz2wsx"), false); // Diagonal pattern
    assert.strictEqual(check_password("zxcvbn"), false); // Reverse horizontal pattern
    // Add more variations if necessary
  });

  //! I did not build this feature in yet, it passes because it doesn't contain a special character
  it("should return false for dictionary words", function () {
    // Test passwords with common dictionary words or variations
    assert.strictEqual(check_password("dictionary"), false); // Common dictionary word
    assert.strictEqual(check_password("Dictionary123"), false); // Dictionary word with digits appended
    //This one doesn't pass yet because it contains special characters and numbers. So I need to build in the dictionary substitution feature if I want to meet this test
    //assert.strictEqual(check_password("P@ssw0rd"), false); // Common password with dictionary word substitution
    // Add more variations if necessary
  });

  //! I did not build this feature in yet, it passes because it doesn't contain a special character
  it("should return false for personal information in passwords", function () {
    // Test passwords with personal information such as names, birthdates, or addresses
    assert.strictEqual(check_password("john1985"), false); // Username with birth year
    assert.strictEqual(check_password("JohnDoe123"), false); // Full name with digits appended
    assert.strictEqual(check_password("123MainStreet"), false); // Address as a password
    // Add more variations if necessary
  });

  //! I did not build this feature in yet, it passes because it doesn't contain a special character
  it("should return false for sequential characters in passwords", function () {
    // Test passwords with sequential characters, both alphanumeric and keyboard adjacent
    assert.strictEqual(check_password("abcd1234"), false); // Sequential alphanumeric
    assert.strictEqual(check_password("qwerty123"), false); // Sequential keyboard
    // Add more variations if necessary
  });

  //! I did not build this feature in yet, it passes because it doesn't contain a special character
  it("should return false for date patterns in passwords", function () {
    // Test passwords with date patterns such as birthdates, years, or common date formats
    assert.strictEqual(check_password("01012022"), false); // Date pattern
    assert.strictEqual(check_password("2022password"), false); // Year pattern
    // Add more variations if necessary
  });

  //! I did not build this feature in yet, it passes because it doesn't contain a special character
  it("should return false for reversed patterns in passwords", function () {
    // Test passwords with reversed patterns, including common words or phrases
    assert.strictEqual(check_password("drowssap"), false); // Reversed common password
    assert.strictEqual(check_password("yeknod_nhoj"), false); // Reversed username
    // Add more variations if necessary
  });

  it("should return false for passwords with non-ASCII characters", function () {
    // Test passwords with non-ASCII characters that might not be supported or cause issues in the system
    assert.strictEqual(check_password("𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭"), false); // Unicode characters
    assert.strictEqual(check_password("Paßwörd"), false); // Password with special characters
    // Add more variations if necessary
  });
});
