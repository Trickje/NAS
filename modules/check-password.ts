import { comparePassword } from "./hash-password.js";
import { hasKeyboardAdjacent } from "./check-keyboard-adjacent.js";
export function checkPassword(password: string): boolean {
  /**
   * This regex enforces the following rules for the password:

      It must contain at least one alphabetical character.
      It must contain at least one digit.
      It must contain at least one special character from the set @$!%*?&.
      It must be at least 8 characters in length.
   */
  const checking_regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])(?!.*[="'\`])[A-Za-z\d@$!%*?&]{8,128}$/;
  return checking_regex.test(password);
}

export function validatePasswordRequirements(password) {
  if (!password) return false;
  password = String(password);
  /**
   * This regex enforces the following rules for the password:

      It must contain at least one alphabetical character.
      It must contain at least one digit.
      It must contain at least one special character from the set @$!%*?&.
      It must be at least 8 characters in length.
   */
  const checking_regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])(?!.*[="'\`])[A-Za-z\d@$!%*?&]{8,128}$/;
  return checking_regex.test(password);
}

export function isPasswordStrong(password) {
  if (!password) return;
  password = String(password);
  // Implementation of strength criteria
  // Return true if password is considered strong, false otherwise

  /// Test for sequential characters in passwords
  if (/(.)\1{2}/.test(password)) {
    // Matches any character repeated twice
    return false;
  }

  // Test for date patterns in passwords
  if (/((19|20)\d{2})/.test(password)) {
    // Matches any 4-digit year starting with 19 or 20
    return false;
  }

  const dictionaryWords = [
    "password",
    "123456",
    "qwerty",
    "letmein",
    "welcome",
    "admin",
    "login",
    "monkey",
    "abc123",
    "football",
    "iloveyou",
    "admin123",
    "123456789",
    "sunshine",
    "master",
    "princess",
    "dragon",
    "jordan23",
    "ashley",
    "password1",
    "charlie",
    "1234567",
    "trustno1",
    "123123",
    "killer",
    "mustang",
    "baseball",
    "starwars",
    "shadow",
    "1234567890",
    "superman",
    "654321",
    "batman",
    "love",
    "1234",
    "football1",
    "letmein1",
    "welcome1",
    "123456a",
    "password123",
    "12345678",
    "abcd1234",
    "iloveyou1",
    "hello",
    "football123",
    "12345",
    "12345678910",
    "qwerty123",
    "111111",
    "michael",
    "123456789a",
    "hunter",
    "test",
    "abc1234",
    "1q2w3e4r",
    "passw0rd",
    "123abc",
    "pass",
    "123",
    "1111",
    "qazwsx",
    "dragon123",
    "letmein123",
    "mustang123",
    "letmein1234",
    "123456789123456789",
    "q1w2e3r4",
    "iloveyou123",
    "qwerty12345",
    "password1234",
    "123qwe",
    "123456z",
    "654321a",
    "princess123",
    "abcdef",
    "qwerty1",
    "shadow123",
    "654321z",
    "welcome123",
    "fuckyou",
    "123456789q",
    "123456789z",
    "admin1234",
    "soccer",
    "11111111",
    "superman123",
    "batman123",
    "123qwe123",
    "iloveyou1234",
    "123456789qwe",
    "football1234",
    "12345a",
    "football1a",
    "1234qwer",
    "123456q",
    "password12",
    "hunter123",
    "12345678910a",
    "qwe123",
    "1111qwe",
    "baseball123",
    "test123",
    "123abc123",
    "123qwe123qwe",
    "welcome1a",
    "abc123456",
    "12345qwe",
    "fuckyou123",
    "password12345",
    "1234abcd",
    "123456789qwerty",
    "1234567a",
    "1234abcd1234abcd",
    "1qaz2wsx",
    "dragon1234",
    "football12",
    "123456789a123456789a",
    "admin12345",
    "1234qwer1234qwer",
    "letmein12",
    "mustang1234",
    "shadow1234",
    "12345q",
    "1234qwerqwer",
    "123456aa",
    "1q2w3e",
    "princess1234",
    "qazwsx123",
    "abcdef123",
    "123abcabc",
    "welcome1234",
    "654321abc",
    "1111111111",
    "iloveyou1a",
    "123456789z123456789z",
    "q1w2e3",
    "qwerty123456",
    "12345qwe",
    "letmein1a",
    "1234abcd1234",
    "admin123456",
    "1234qwe",
    "123456qwe",
    "qwe123456",
    "123qwe123qwe",
    "1111qwe1111qwe",
    "1234abcd1234abcd",
    "1qaz2wsx3edc",
    "1234qwerasdfzxcv",
    "abcd1234abcd",
    "12345qwe12345qwe",
    "asdf1234asdf",
    "123456qwerty",
    "1qaz2wsx3edc4rfv",
    "qazwsx1234",
    "1234567890a",
    "iloveyou123456",
    "qweasdzxc",
    "qwertyuiop",
    "iloveyou12345",
    "password123456",
    "zxcvbnm123",
    "123456qwertyuiop",
    "1234567qwerty",
    "qwerty123456789",
    "12345678a",
    "12345678910qwerty",
    "123456789zxcvbnm",
    "q1w2e3r4t5y6",
    "1234567890qwerty",
    "1234qwerasdf",
    "qwerty1234567890",
    "password123456789",
    "zaq12wsx",
    "1q2w3e4r5t",
    "12345678q",
    "1234abcdabcd",
    "1qazxsw2",
    "123456789qweasd",
    "123456789qwe123",
    "123456789qwertyu",
    "zaq1xsw2",
    "123456789qwertyui",
    "1234567890qwertyui",
    "1qaz2wsx3edc4rfv5tgb",
    "qazxsw123",
    "123456789123456789a",
    "1234567890qwertyuiop",
    "123456789qwertyuiop",
    "1234567890qwertyuio",
    "12345678901234567890",
    "qweasdzxc123",
    "1234567890123456789",
    "1234567890qwertyuiopas",
    "qwertyuiop1234567890",
    "123456789qwertyuiopasdf",
    "1qaz2wsx3edc4rfv5tgb6yhn",
    "123456789012345678",
    "1234567890qwertyuiopasdfghjkl",
    "1qaz2wsx3edc4rfv5tgb6yhn7ujm",
    "1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik",
    "1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol",
    "1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p",
    "password1234567",
    "password12345678",
    "password123456789",
    "password1234567890",
    "123456789012345",
    "1234567890123456",
    "12345678901234567",
    "123456789012345678",
    "1234567890123456789",
    "12345678901234567890",
    "qwertyuiopasdfghjklzxcvbnm",
    "qwertyuiopasdfghjklzxcvbnm123",
    "qwertyuiopasdfghjklzxcvbnm1234",
    "qwertyuiopasdfghjklzxcvbnm12345",
    "qwertyuiopasdfghjklzxcvbnm123456",
    "qwertyuiopasdfghjklzxcvbnm1234567",
    "qwertyuiopasdfghjklzxcvbnm12345678",
    "qwertyuiopasdfghjklzxcvbnm123456789",
    "qwertyuiopasdfghjklzxcvbnm1234567890",
    "passwordqwerty",
    "passwordqwertyuiop",
    "passwordqwertyuiopasdfghjkl",
    "passwordqwertyuiopasdfghjklzxcvbnm",
    "password123456789012345678901234567890",
    "123456789012345678901234567890qwertyuiop",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890",
    "password1234567890",
    "passwordqwerty123",
    "passwordqwertyuiop123",
    "passwordqwertyuiopasdfghjkl123",
    "passwordqwertyuiopasdfghjklzxcvbnm123",
    "password123456789012345678901234567890qwertyuiop",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm123",
    "password123456789012345678901234567890",
    "passwordqwertyuiopasdfghjklzxcvbnm",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm",
    "123456789012345678901234567890",
    "123456789012345678901234567890qwertyuiop",
    "123456789012345678901234567890qwertyuiopasdfghjkl",
    "passwordqwertyuiopasdfghjklzxcvbnm1234567890",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890",
    "passwordqwertyuiopasdfghjklzxcvbnm123456789",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm123",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm123456789",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890",
    "passwordqwertyuiopasdfghjklzxcvbnm1234567890",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm123456789",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm123456789",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890",
    "passwordqwertyuiopasdfghjklzxcvbnm1234567890123456789",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890123456789",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm1234567890123456789",
    "passwordqwertyuiopasdfghjklzxcvbnm12345678901234567890",
    "password123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm12345678901234567890",
    "123456789012345678901234567890qwertyuiopasdfghjklzxcvbnm12345678901234567890",
    // Add more common dictionary words and phrases as needed
  ];

  // Test for dictionary words
  if (dictionaryWords.includes(password.toLowerCase())) {
    return false;
  }

  // Test for keyboard adjacent characters
  if (
    hasKeyboardAdjacent(
      password.toLowerCase(),
      "qwertyuiopasdfghjklzxcvbnm1234567890"
    )
  ) {
    return false;
  }

  // Check if the password contains a repeated pattern
  if (/(\w{2,})\1/.test(password)) {
    // Matches any repeated pattern of two or more characters
    return false;
  }

  return true;
}

export function canBeNewPassword(password: string) {
  //TODO: Call to the database and receives a hashed password
  const previousPass = "";
  comparePassword(password, previousPass).then((isSame) => {
    if (isSame) {
      //Cannot be the same a the previous password.'
      return false;
    }

    if (checkPassword(password) == false) {
      //Should follow the password guidelines
      return false;
    }

    return true;
  });
}
