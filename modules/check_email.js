export function check_email(email) {
  // Regular expression for checking email validity
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
