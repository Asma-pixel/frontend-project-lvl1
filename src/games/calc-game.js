import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRandomOperator = () => {
  const limit = 3;
  const operatorQualifier = getRandomNumber(limit);
  let operator = '';
  switch (operatorQualifier) {
    case 1:
      operator = '+';
      break;
    case 2:
      operator = '-';
      break;
    case 3:
      operator = '*';
      break;
    default:
      break;
  }

  return operator;
};
const getAnswer = (firstNumber, secondNumber, operator) => {
  let answer = '';
  switch (operator) {
    case '+':
      answer = (firstNumber + secondNumber).toString();
      break;
    case '-':
      answer = (firstNumber - secondNumber).toString();
      break;
    case '*':
      answer = (firstNumber * secondNumber).toString();
      break;
    default:
      break;
  }
  return answer;
};

const getQuestionWithAnswer = () => {
  const limit = 100;
  const arrQuestionAnswer = [2];
  const firstNumber = getRandomNumber(limit);
  const secondNumber = getRandomNumber(limit);
  const operator = getRandomOperator(limit);
  const expression = `${firstNumber} ${operator} ${secondNumber}`;

  arrQuestionAnswer[0] = expression;
  arrQuestionAnswer[1] = getAnswer(firstNumber, secondNumber, operator);

  return arrQuestionAnswer;
};

const calcGame = () => {
  const description = 'What is the result of the expression?';
  gameLogics(getQuestionWithAnswer, description);
};
export default calcGame;
