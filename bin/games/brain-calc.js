import rules from './../../src/index.js'

const terms = 'What is the result of the expression?'
const questionLimit = 3
const questions = []
const operations = [`+`, `*`, `-`]
const answers = []

for (let i = 0; i < questionLimit; i += 1) {
  const num1 = Math.floor(Math.random() * 100)
  const num2 = Math.floor(Math.random() * 100)
  const operation = operations[Math.floor(Math.random() * operations.length)]
  questions[i] = `${num1} ${operation} ${num2}`
  answers[i] = eval(questions[i])
}


rules(terms, questionLimit, questions, answers)
