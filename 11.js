function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
    return "Invalid input: The array must contain exactly 10 integers between 0 and 9.";
  }
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
