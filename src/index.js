import readlineSync from 'readline-sync';

const runGameLogics = (getQuestionWithAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i get your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    
    const [question, rightAnswer] = getQuestionWithAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
export default runGameLogics;
