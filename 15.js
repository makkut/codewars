function orderWeight(strng) {
  const numbers = strng.split(" ");
  const customSort = (a, b) => {
    const weightA = a
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    const weightB = b
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);

    if (weightA === weightB) {
      return a.localeCompare(b);
    } else {
      return weightA - weightB;
    }
  };

  numbers.sort(customSort);
  return numbers.join(" ");
}
