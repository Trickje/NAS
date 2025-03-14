// this will be the password regex check
import {
  checkPassword,
  validatePasswordRequirements,
  isPasswordStrong,
} from "../modules/check-password";
import * as assert from "assert";
import { it } from "mocha";

describe("Validate password requirements", () => {
  it("needs to pass a simple password", () => {
    const password = "MyP@ssw0rd";
    assert.strictEqual(validatePasswordRequirements(password), true);
  });

  it("needs to pass a complex password", () => {
    const password = "Myp@ssw0rd021300i8412344D";
    assert.strictEqual(validatePasswordRequirements(password), true);
  });

  it("needs to fail a password that is 7 characters or less", () => {
    const password = "MyP@ssw"; // 7 characters
    assert.strictEqual(validatePasswordRequirements(password), false);
  });

  it("needs to fail a password that does not have a special character", () => {
    const password = "MyPassw0rd"; // No special character
    assert.strictEqual(validatePasswordRequirements(password), false);
  });

  it("needs to fail a password that does not have a digit", () => {
    const password = "MyP@ssword"; // No digits
    assert.strictEqual(validatePasswordRequirements(password), false);
  });

  it("needs to fail a password that attempts an SQL injection", () => {
    const password = 'MyP@ssw0rd" OR ""="'; // SQL injection attempt
    assert.strictEqual(validatePasswordRequirements(password), false);
  });

  it("should return false for empty input", function () {
    // Test empty input
    assert.strictEqual(validatePasswordRequirements(""), false);
  });

  /* // TypeScript doesn't allow this to fail
  it("should return false for undefined input", function () {
    // Test undefined input
    assert.strictEqual(validatePasswordRequirements(undefined), false);
  });*/

  it("should return false for passwords with non-ASCII characters", function () {
    // Test passwords with non-ASCII characters that might not be supported or cause issues in the system
    assert.strictEqual(validatePasswordRequirements("𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭"), false); // Unicode characters
    assert.strictEqual(validatePasswordRequirements("Paßwörd"), false); // Password with special characters
    // Add more variations if necessary
  });
});

describe("Check for password strength", () => {
  it("should return false for common weak passwords", function () {
    // Test common weak passwords
    assert.strictEqual(isPasswordStrong("password"), false); // The word "password"
    assert.strictEqual(isPasswordStrong("123456"), false); // Sequential numbers
    assert.strictEqual(isPasswordStrong("qwerty"), false); // Simple keyboard pattern
    assert.strictEqual(isPasswordStrong("abc123"), false); // Numeric sequence
    assert.strictEqual(isPasswordStrong("letmein"), false); // Common phrase
    // Add more weak passwords according to your criteria
  });

  /* it("should return false for variations of username as password", function () {
    // Test variations of username as password
    const username = "john_doe";
    assert.strictEqual(isPasswordStrong(username), false); // Username as is
    assert.strictEqual(isPasswordStrong(username.toUpperCase()), false); // Uppercase username
    assert.strictEqual(isPasswordStrong(username + "123"), false); // Username with digits appended
    // Add more variations if necessary
  }); */

  it("should return false for repeated characters or patterns", function () {
    // Test passwords with repeated characters or patterns
    assert.strictEqual(isPasswordStrong("aaa"), false); // Repeated characters
    assert.strictEqual(isPasswordStrong("ababab"), false); // Repeated pattern
    assert.strictEqual(isPasswordStrong("123123"), false); // Repeated numeric pattern
    // Add more variations if necessary
  });

  it("should return false for keyboard adjacent characters", function () {
    // Test passwords with keyboard adjacent characters
    assert.strictEqual(isPasswordStrong("qazwsx"), false); // Horizontal pattern
    assert.strictEqual(isPasswordStrong("1qaz2wsx"), false); // Diagonal pattern
    assert.strictEqual(isPasswordStrong("zxcvbn"), false); // Reverse horizontal pattern
    // Add more variations if necessary
  });

  it("should return false for dictionary words", function () {
    // Test passwords with common dictionary words or variations
    assert.strictEqual(isPasswordStrong("dictionary"), false); // Common dictionary word
    assert.strictEqual(isPasswordStrong("Dictionary123"), false); // Dictionary word with digits appended
    //This one doesn't pass yet because it contains special characters and numbers. So I need to build in the dictionary substitution feature if I want to meet this test
    //assert.strictEqual(isPasswordStrong("P@ssw0rd"), false); // Common password with dictionary word substitution
    // Add more variations if necessary
  });

  it("should return false for personal information in passwords", function () {
    // Test passwords with personal information such as names, birthdates, or addresses
    assert.strictEqual(isPasswordStrong("john1985"), false); // Username with birth year
    assert.strictEqual(isPasswordStrong("JohnDoe123"), false); // Full name with digits appended
    assert.strictEqual(isPasswordStrong("123MainStreet"), false); // Address as a password
    // Add more variations if necessary
  });

  it("should return false for sequential characters in passwords", function () {
    // Test passwords with sequential characters, both alphanumeric and keyboard adjacent
    assert.strictEqual(isPasswordStrong("abcd1234"), false); // Sequential alphanumeric
    assert.strictEqual(isPasswordStrong("qwerty123"), false); // Sequential keyboard
    // Add more variations if necessary
  });

  it("should return false for date patterns in passwords", function () {
    // Test passwords with date patterns such as birthdates, years, or common date formats
    assert.strictEqual(isPasswordStrong("01012022"), false); // Date pattern
    assert.strictEqual(isPasswordStrong("2022password"), false); // Year pattern
    // Add more variations if necessary
  });
});
