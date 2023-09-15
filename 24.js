function add(a, b) {
  // Initialize variables to store the result and carry
  let result = "";
  let carry = 0;

  // Start iterating from the rightmost digits
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    // Extract digits from both strings, or use 0 if not available
    const numA = i >= 0 ? parseInt(a[i]) : 0;
    const numB = j >= 0 ? parseInt(b[j]) : 0;

    // Calculate the sum of current digits and carry
    const sum = numA + numB + carry;

    // Calculate the new carry and append the current digit to the result
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    // Move to the next digit
    i--;
    j--;
  }

  return result;
}
