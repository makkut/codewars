function solution(list) {
  let result = "";
  let start = list[0];
  let current = start;

  for (let i = 1; i < list.length; i++) {
    if (list[i] === current + 1) {
      current = list[i];
    } else {
      if (start === current) {
        result += start + ",";
      } else if (current === start + 1) {
        result += start + "," + current + ",";
      } else {
        result += start + "-" + current + ",";
      }

      start = list[i];
      current = start;
    }
  }

  if (start === current) {
    result += start;
  } else if (current === start + 1) {
    result += start + "," + current;
  } else {
    result += start + "-" + current;
  }

  return result;
}
