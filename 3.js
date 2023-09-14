function longest(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);

  const combinedSet = new Set([...set1, ...set2]);
  const resultArray = Array.from(combinedSet);

  const sortedResult = resultArray.sort().join("");

  return sortedResult;
}
