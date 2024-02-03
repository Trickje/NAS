export function check_password(password) {
  /**
   * This regex enforces the following rules for the password:

      It must contain at least one alphabetical character.
      It must contain at least one digit.
      It must contain at least one special character from the set @$!%*?&.
      It must be at least 8 characters in length.
   */
  const checking_regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return checking_regex.test(password);
}
