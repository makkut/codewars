function getMiddle(s) {
  const length = s.length;
  if (length % 2 === 0) {
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return s.charAt(middleIndex1) + s.charAt(middleIndex2);
  } else {
    const middleIndex = Math.floor(length / 2);
    return s.charAt(middleIndex);
  }
}
