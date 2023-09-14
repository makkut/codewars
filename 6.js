function isPangram(string) {
  const letterSet = new Set();

  for (let char of string.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      letterSet.add(char);
    }
  }

  return letterSet.size === 26;
}
