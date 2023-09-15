function climbingStairs(cost) {
  const n = cost.length;

  // Initialize an array to store the minimum cost to reach each step
  const minCost = new Array(n);

  // Base cases
  minCost[0] = cost[0];
  minCost[1] = cost[1];

  // Calculate the minimum cost for each step starting from the third step
  for (let i = 2; i < n; i++) {
    minCost[i] = cost[i] + Math.min(minCost[i - 1], minCost[i - 2]);
  }

  // Return the minimum of the last two steps (reaching the top)
  return Math.min(minCost[n - 1], minCost[n - 2]);
}
