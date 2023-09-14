decodeMorse = function (morseCode) {
  const words = morseCode.trim().split("   ");
  const decodedWords = words.map((word) => {
    const characters = word.split(" ");
    const decodedWord = characters.map((char) => MORSE_CODE[char]).join("");

    return decodedWord;
  });
  return decodedWords.join(" ");
};
