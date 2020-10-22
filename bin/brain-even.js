import promptly from 'promptly'

game()

async function game(){
  const name = await promptly.prompt('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for(let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100) + 1
    console.log(`Question: ${num}`)
    const answer = await promptly.prompt('Your answer: ')
    let conAnswer = 'no'
    if (num % 2 === 0) {
      conAnswer = 'yes'
      if (answer === 'yes') {
        console.log('Correct!')
        if (i === 2) {
          console.log(`Congratulations, ${name}!`)
        }
        continue
      }
    }
    if ((num % 2 > 0) && (answer === 'no')) {
      console.log('Correct!')
      if (i === 2) {
        console.log(`Congratulations, ${name}!`)
      }
      continue
    }
    console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${conAnswer}\'. \nLet\'s try again, ${name}!`)
    break
  }
}
