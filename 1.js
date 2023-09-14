function doubleChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str.charAt(i) + str.charAt(i);
    console.log(result);
  }

  return result;
}
