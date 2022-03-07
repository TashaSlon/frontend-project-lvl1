#!/usr/bin/env node

import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = cli();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let result = true;
for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = (num % 2 === 0) ? 'yes' : 'no';
  if (isEven === answer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven}".\nLet's try again, ${name}!`);
    i = 3;
    result = false;
  }
}
if (result) {
  console.log(`Congratulations, ${name}!`);
}
