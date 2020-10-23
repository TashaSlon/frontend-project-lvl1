import rules from './../../src/index.js'

const terms = 'Find the greatest common divisor of given numbers.'
const questionLimit = 3
const questions = []
const answers = []

for (let i = 0; i < questionLimit; i += 1) {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1
  questions[i] = `${num1} ${num2}`
  const gcd = (num1, num2) => {
    while (num2 !== 0) num2 = num1 % (num1 = num2)
    return num1
  }
  answers[i] = gcd(num1, num2)
}

rules(terms, questionLimit, questions, answers)
