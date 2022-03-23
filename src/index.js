#!/usr/bin/env node

import cli from "../src/cli.js";
import readlineSync from 'readline-sync';

export default (questions) => {
	console.log('Welcome to the Brain Games!');
	const name = cli();

	console.log(questions[0]);
	let result = true;
	for (let i = 1; i < 4; i += 1) {
		console.log(`Question: ${questions[i][0]}`);
		const answer = readlineSync.question('Your answer: ');
		if (questions[i][1] === answer) {
			console.log('Correct!');
		} else {
			console.log(`"${answer}" is wrong answer ;(. Correct answer was "${questions[i][1]}".\nLet's try again, ${name}!`);
			i = 3;
			result = false;
		}
	}
	if (result) {
		console.log(`Congratulations, ${name}!`);
	}
};
