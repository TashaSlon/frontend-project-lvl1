import promptly from "promptly";

export default async function (terms, questionLimit, questions, answers) {
  console.log('Welcome to the Brain Games!')
  const name = await promptly.prompt('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(terms)

  for (let i = 0; i < questionLimit; i += 1) {
    const num = questions[i]
    console.log(`Question: ${num}`)
    const answer = await promptly.prompt('Your answer: ')
    if (parseInt(answer) === answers[i]) {
      console.log('Correct!')
      if (i === 2) {
        console.log(`Congratulations, ${name}!`)
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answers[i]}'. \nLet's try again, ${name}!`)
      break
    }
  }
}
