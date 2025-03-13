import bcrypt from "bcrypt";

// Function to hash the password using bcrypt
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Number of salt rounds
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Function to compare a plain text password with its hashed version
export async function comparePassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match;
}
