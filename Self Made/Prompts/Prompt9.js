// Evaluate math expression without using eval()
// ex. evaluate('5 + 8 * 9') => 77
// assume equation always valid
// assume spaces are always included between characters
// 

// math functions
const add = (a, b) => parseInt(a) + parseInt(b);
const subtract = (a, b) => parseInt(b) - parseInt(a);
const multiply = (a, b) => parseInt(a) * parseInt(b);
const divide = (a, b) => parseInt(b) / parseInt(a);

// is it a number
const isNumeric = (char) => !isNaN(parseFloat(char)) && isFinite(char);

// function map
const math = {
  '*': multiply,
  '/': divide,
  '-': subtract,
  '+': add,
};

const evaluate = equation => {
  // TODO: solve me
};

