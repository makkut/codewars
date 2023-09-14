function dirReduc(arr) {
  const stack = [];

  for (const direction of arr) {
    const opposite = getOppositeDirection(direction);
    if (stack.length > 0 && stack[stack.length - 1] === opposite) {
      stack.pop();
    } else {
      stack.push(direction);
    }
  }

  return stack;
}

function getOppositeDirection(direction) {
  switch (direction) {
    case "NORTH":
      return "SOUTH";
    case "SOUTH":
      return "NORTH";
    case "EAST":
      return "WEST";
    case "WEST":
      return "EAST";
    default:
      return direction;
  }
}
