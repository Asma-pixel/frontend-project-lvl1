import runGameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEven = (number) => number % 2 === 0;

const getQuestionWithAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameLogics(getQuestionWithAnswer, description);
};

export default runEvenGame;
