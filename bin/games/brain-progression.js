#!/usr/bin/env node
import common from '../../src/index.js';

const createQuestion = () => {
  const length = Math.floor(Math.random() * 6 + 5);
  const step = Math.floor(Math.random() * 10 + 1);
  const firstEl = Math.floor(Math.random() * 100);
  const gap = Math.floor(Math.random() * (length - 1) + 1);
  const progression = [firstEl];
  let result = 0;
  for (let i = 1; i < length; i += 1) {
    if (i === gap) {
      progression.push('..');
      result = firstEl + step * i;
    } else {
      progression.push(firstEl + step * i);
    }
  }
  const expression = progression.join(' ');
  return [expression, String(result)];
};

const questions = ['What number is missing in the progression?'];
for (let i = 0; i < 3; i += 1) {
  questions.push(createQuestion());
}
common(questions);
