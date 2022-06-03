import readlineSync from 'readline-sync';

const gameLogics = (getQuestionWithAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i get your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const arrQuestionAnswer = getQuestionWithAnswer();
    const question = arrQuestionAnswer[0];
    const rightAnswer = arrQuestionAnswer[1];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
export default gameLogics;
