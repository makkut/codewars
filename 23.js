Array.prototype.sameStructureAs = function (other) {
  // Check if both 'this' and 'other' are arrays
  if (!Array.isArray(this) || !Array.isArray(other)) {
    return false;
  }

  // Check if the length of 'this' is not equal to the length of 'other'
  if (this.length !== other.length) {
    return false;
  }

  // Iterate through the elements of 'this' and 'other'
  for (let i = 0; i < this.length; i++) {
    // If both elements are arrays, recursively compare their structures
    if (Array.isArray(this[i]) && Array.isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else if (
      (!Array.isArray(this[i]) && Array.isArray(other[i])) ||
      (Array.isArray(this[i]) && !Array.isArray(other[i]))
    ) {
      // If one element is an array and the other is not, return false
      return false;
    }
    // If both elements are not arrays, continue the loop
  }

  // If all elements have matching structures, return true
  return true;
};
