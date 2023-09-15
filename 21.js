function score(dice) {
  let totalScore = 0;
  const counts = Array(7).fill(0); // Initialize an array to count the occurrences of each number

  // Count the occurrences of each number (1 to 6)
  for (const die of dice) {
    counts[die]++;
  }

  // Calculate the score based on the rules
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 3) {
      // Three or more of the same number
      if (i === 1) {
        totalScore += 1000; // Three 1's
      } else {
        totalScore += i * 100; // Three of any other number
      }
      counts[i] -= 3; // Remove the counted dice
    }

    if (i === 1) {
      // Handle singles of 1
      totalScore += counts[i] * 100;
    } else if (i === 5) {
      // Handle singles of 5
      totalScore += counts[i] * 50;
    }
  }

  return totalScore;
}
