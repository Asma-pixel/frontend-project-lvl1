import gameLogics from '../index.js'
import getRandomNumber from '../randomNumber.js';

const getQuestionWithAnswer = () => {
  const arrQuestionAnswer = [2];
  const num = getRandomNumber();
  arrQuestionAnswer[0] = num;
  arrQuestionAnswer[1] = num % 2 === 0 ? 'yes' : 'no';
  return arrQuestionAnswer;
}

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLogics(getQuestionWithAnswer, description);
};

export default evenGame;