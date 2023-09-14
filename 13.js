function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (alphabet.includes(char)) {
      const position = alphabet.indexOf(char) + 1;
      result.push(position);
    }
  }

  return result.join(" ");
}
