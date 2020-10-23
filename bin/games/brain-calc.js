import rules from './../../src/index.js'

const terms = 'What is the result of the expression?'
const questionLimit = 3
const questions = []
const operations = ['+', '*', '-']
const answers = []

for (let i = 0; i < questionLimit; i += 1) {
  const num1 = Math.floor(Math.random() * 100)
  const num2 = Math.floor(Math.random() * 100)
  const operation = operations[Math.floor(Math.random() * operations.length)]
  questions[i] = `${num1} ${operation} ${num2}`
  /*jslint evil: true */
  const getAnswer = new Function('num1', 'num2', 'operation', `return ${num1} ${operation} ${num2}`)
  answers[i] = getAnswer(num1, num2, operation)
}

rules(terms, questionLimit, questions, answers)
