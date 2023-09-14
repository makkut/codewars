function isPrime(num) {
  // Check for special cases
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }

  // Check if the number is divisible by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  // Start checking for divisors from 5 up to the square root of the number
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
