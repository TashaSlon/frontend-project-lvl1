import rules from './../../src/index.js'

const terms = 'Answer "yes" if the number is even, otherwise answer "no".'
const questionLimit = 3
const questions = []
const answers = []

for (let i = 0; i < questionLimit; i += 1) {
  const num = Math.floor(Math.random() * 100)
  questions[i] = num
  if (num % 2 === 0) {
    answers[i] = 'yes'
  } else {
    answers[i] = 'no'
  }
}

rules(terms, questionLimit, questions, answers)
