import assert from "assert";
import { hash_password, comparePassword } from "../modules/hash_password.js";

describe("Password functions", function () {
  describe("hash_password", function () {
    var first_hashedPassword;
    it("should hash a password", async function () {
      first_hashedPassword = await hash_password("MyP@ssw0rd");
      assert.notStrictEqual(first_hashedPassword, "MyP@ssw0rd");
    });

    it("should not return the same hash hash a password", async function () {
      const second_hashedPassword = await hash_password("MyP@ssw0rd");
      assert.notStrictEqual(first_hashedPassword, second_hashedPassword);
    });
  });

  describe("comparePassword", function () {
    it("should compare a plain password with its hashed version", async function () {
      const previouslyHashedPassword =
        "$2b$10$yavaXXLJ50RWsmDwz9zmSOm8jHVxdsLErT5jHdTi9nPVK68CRkYSm";

      const match = await comparePassword(
        "MyP@ssw0rd",
        previouslyHashedPassword
      );
      assert.strictEqual(match, true);
    });
  });
});
