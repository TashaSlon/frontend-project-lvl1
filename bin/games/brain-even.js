#!/usr/bin/env node

import common from "../../src/index.js";

const createQuestion = () => {
	const expression = Math.floor(Math.random() * 100);
	let result = (expression % 2 === 0) ? 'yes' : 'no';

	return [expression, result];
};

const questions = ['Answer "yes" if the number is even, otherwise answer "no".'];
for (let i = 0; i < 3; i += 1) {
	questions.push(createQuestion());
}
common(questions);