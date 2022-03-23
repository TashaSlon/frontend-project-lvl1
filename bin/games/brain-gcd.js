#!/usr/bin/env node
import common from '../../src/index.js';

const createQuestion = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expression = `${num1} ${num2}`;
  let result = 0;
  if ((num1 === 0) || (num2 === 0)) {
    return [expression, String(result)];
  }
  let nod = (num1 > num2) ? num2 : num1;

  while (nod > 0) {
    if ((num1 % nod === 0) && (num2 % nod === 0)) {
      result = nod;
      nod = 0;
    }
    nod -= 1;
  }
  return [expression, String(result)];
};

const questions = ['Find the greatest common divisor of given numbers.'];
for (let i = 0; i < 3; i += 1) {
  questions.push(createQuestion());
}
common(questions);
