class RomanNumerals {
  static toRoman(num) {
    const romanSymbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    const integerValues = [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
    ];
    let result = "";

    for (let i = 0; i < romanSymbols.length; i++) {
      while (num >= integerValues[i]) {
        result += romanSymbols[i];
        num -= integerValues[i];
      }
    }

    return result;
  }

  static fromRoman(str) {
    const romanToInt = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;
    let prevValue = 0;

    for (let i = str.length - 1; i >= 0; i--) {
      const currentSymbol = str[i];
      const currentValue = romanToInt[currentSymbol];

      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }

      prevValue = currentValue;
    }

    return result;
  }
}
