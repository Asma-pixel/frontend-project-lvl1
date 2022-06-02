import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getQuestionWithAnswer = () => {
  const arrQuestionAnswer = [2];
  let firstNumber = getRandomNumber();
  let secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  arrQuestionAnswer[0] = question;

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }

  arrQuestionAnswer[1] = firstNumber + secondNumber;
  return arrQuestionAnswer;
};
const gameGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  gameLogics(getQuestionWithAnswer, description);
};

export default gameGcd;
