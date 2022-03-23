#!/usr/bin/env node
import common from '../../src/index.js';

const createQuestion = () => {
  const num = Math.floor(Math.random() * 10000);
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
    }
  }
  return [num, result];
};

const questions = ['Answer "yes" if given number is prime. Otherwise answer "no".'];
for (let i = 0; i < 3; i += 1) {
  questions.push(createQuestion());
}
common(questions);
