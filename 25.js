var recoverSecret = function (triplets) {
  // Initialize an adjacency list to represent the directed graph
  const graph = new Map();

  // Build the graph based on the triplets
  for (const triplet of triplets) {
    for (const char of triplet) {
      if (!graph.has(char)) {
        graph.set(char, new Set());
      }
    }
    graph.get(triplet[0]).add(triplet[1]);
    graph.get(triplet[1]).add(triplet[2]);
  }

  // Perform topological sorting to find the correct order of characters
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      if (graph.has(node)) {
        for (const neighbor of graph.get(node)) {
          dfs(neighbor);
        }
      }
      result.unshift(node); // Add to the beginning of the result to maintain order
    }
  }

  for (const char of graph.keys()) {
    dfs(char);
  }

  return result.join("");
};
