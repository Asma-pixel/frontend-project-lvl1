import runGameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRandomOperator = () => {
  const minNumber = 1;
  const maxNummber = 3;

  const operatorQualifier = getRandomNumber(minNumber, maxNummber);
  console.log(operatorQualifier);
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
  const arrQuestionAnswer = [2];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const expression = `${firstNumber} ${operator} ${secondNumber}`;

  arrQuestionAnswer[0] = expression;
  arrQuestionAnswer[1] = getAnswer(firstNumber, secondNumber, operator);

  return arrQuestionAnswer;
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGameLogics(getQuestionWithAnswer, description);
};
export default runCalcGame;
