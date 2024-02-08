export function hasKeyboardAdjacent(password, characters) {
  for (let i = 0; i < password.length - 1; i++) {
    const currentChar = password[i];
    const nextChar = password[i + 1];
    if (characters.includes(currentChar) && characters.includes(nextChar)) {
      const currentIndex = characters.indexOf(currentChar);
      const nextIndex = characters.indexOf(nextChar);
      if (Math.abs(currentIndex - nextIndex) === 1) {
        return true;
      }
    }
  }
  return false;
}
