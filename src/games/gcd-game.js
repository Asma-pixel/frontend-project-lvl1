import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getAnswer = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const result = firstNumber + secondNumber;
  return result.toString();
};
const getQuestionWithAnswer = () => {
  const limit = 100;
  const arrQuestionAnswer = [2];
  const firstNumber = getRandomNumber(limit);
  const secondNumber = getRandomNumber(limit);
  const question = `${firstNumber} ${secondNumber}`;
  arrQuestionAnswer[0] = question;
  arrQuestionAnswer[1] = getAnswer(firstNumber, secondNumber);
  return arrQuestionAnswer;
};
const gameGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  gameLogics(getQuestionWithAnswer, description);
};

export default gameGcd;
