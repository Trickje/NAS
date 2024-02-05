import { compare_password } from "./hash_password.js";
export function check_password(password) {
  /**
   * This regex enforces the following rules for the password:

      It must contain at least one alphabetical character.
      It must contain at least one digit.
      It must contain at least one special character from the set @$!%*?&.
      It must be at least 8 characters in length.
   */
  const checking_regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])(?!.*[="'\`])[A-Za-z\d@$!%*?&]{8,}$/;
  return checking_regex.test(password);
}

export function can_be_new_password(password) {
  //TODO: Call to the database and receives a hashed password
  const previousPass = "";
  if (compare_password(password, previousPass)) {
    //Cannot be the same a the previous password.'
    return false;
  }

  if (check_password(password) == false) {
    //Should follow the password guidelines
    return false;
  }

  return true;
}
