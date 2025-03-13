export function check_email(email: string): boolean {
  // Regular expression for checking email validity
  const emailRegex =
    /^(?=.{1,64}@.{1,255}$)[\w.%+-]+@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
