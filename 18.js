function listSquared(m, n) {
  function getDivisorsSum(num) {
    let divisorsSum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisorsSum += i * i;
        if (i !== num / i) {
          divisorsSum += (num / i) * (num / i);
        }
      }
    }
    return divisorsSum;
  }

  const result = [];
  for (let num = m; num <= n; num++) {
    const divisorsSum = getDivisorsSum(num);
    const squareRoot = Math.sqrt(divisorsSum);
    if (Number.isInteger(squareRoot)) {
      result.push([num, divisorsSum]);
    }
  }

  return result;
}
