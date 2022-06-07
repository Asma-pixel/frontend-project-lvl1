import runGameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEven = (number) => number % 2 === 0;

const getQuestionWithAnswer = () => {
  const arrQuestionAnswer = [2];
  const num = getRandomNumber();
  arrQuestionAnswer[0] = num;
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  arrQuestionAnswer[1] = expectedAnswer;
  return arrQuestionAnswer;
};

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameLogics(getQuestionWithAnswer, description);
};

export default runEvenGame;
