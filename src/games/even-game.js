import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEven = (number) => number % 2 === 0;

const getQuestionWithAnswer = () => {
  const limit = 100;
  const arrQuestionAnswer = [2];
  const num = getRandomNumber(limit);
  arrQuestionAnswer[0] = num;
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  arrQuestionAnswer[1] = expectedAnswer;
  return arrQuestionAnswer;
};

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLogics(getQuestionWithAnswer, description);
};

export default evenGame;
