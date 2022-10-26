const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factor = factorialOfNumber(num);

  return { ratio, factor };
};

module.exports = ratioAndFactorial;
