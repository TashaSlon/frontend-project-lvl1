import common from '../../src/index.js';

const createQuestion = () => {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operator = Math.floor(Math.random() * 3);
  const expression = `${num1} ${operators[operator]} ${num2}`;
  let result = 0;
  switch (operator) {
    case 0:
      result = num1 + num2;
      break;
    case 1:
      result = num1 - num2;
      break;
    case 2:
      result = num1 * num2;
      break;
    default:
      result = num1 + num2;
  }
  return [expression, String(result)];
};

const questions = ['What is the result of the expression?'];
for (let i = 0; i < 3; i += 1) {
  questions.push(createQuestion());
}
common(questions);
