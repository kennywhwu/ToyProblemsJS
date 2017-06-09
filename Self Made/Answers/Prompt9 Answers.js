// Evaluate math expression without using eval()
// ex. evaluate('5 + 8 * 9') => 77
// assume equation always valid
// assume spaces are always included between characters

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

const convertRPN = expression => {
  const ops = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const peek = a => a[a.length - 1];
  let stack = [];

  return expression.split('')
    .reduce((rpn, val) => {
      if (parseFloat(val)) {
        rpn.push(val);
      }

      if (val in ops) {
        while (peek(stack) in ops && ops[val] <= ops[peek(stack)]) {
          rpn.push(stack.pop());
        }
        stack.push(val);
      }

      if (val == '(') {
        stack.push(val);
      }

      if (val == ')') {
        while (peek(stack) != '(')
          rpn.push(stack.pop());
        stack.pop();
      }

      return rpn;
    }, [])
    .concat(stack.reverse());
}

const evaluate = equation => {
  let rpnFormat = convertRPN(equation);
  let stack = [];

  for (let val of rpnFormat) {
    if (isNumeric(val)) {
      stack.push(val);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      let result = math[val](a, b);
      console.log(result, a, val, b)
      stack.push(math[val](a, b));
    }
  }

  return stack.length <= 1 ? stack[0] : 'error processing';
};

console.log(evaluate('3 + 4 * 5 / (3 + 2)') === eval('3 + 4 * 5 / (3 + 2)'))
