function nextBigger(n) {
  const digits = n.toString().split("");
  let i = digits.length - 2; // Start from the second-to-last digit

  // Find the first pair of adjacent digits where the left digit is smaller than the right digit
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i === -1) {
    // No such pair found, the number is already the largest possible permutation
    return -1;
  }

  // Find the smallest digit to the right of i that is larger than digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Swap digits[i] and digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Reverse the digits to the right of i to get the smallest possible number
  const reversed = digits.slice(i + 1).reverse();

  // Combine all parts to get the next bigger number
  const nextBiggerNumber = parseInt(
    digits
      .slice(0, i + 1)
      .concat(reversed)
      .join("")
  );

  return nextBiggerNumber;
}
