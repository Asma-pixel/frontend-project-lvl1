import runGameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRandomOperator = () => {
  const minNumber = 0;
  const maxNummber = 2;

  const operatorQualifier = getRandomNumber(minNumber, maxNummber);
  const operators = ['+', '-', '*'];
  const operator = operators[operatorQualifier];

  return operator;
};
const getAnswer = (firstNumber, secondNumber, operator) => {
  let answer = '';
  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return answer;
};

const getQuestionWithAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const expression = `${firstNumber} ${operator} ${secondNumber}`;

  const result = getAnswer(firstNumber, secondNumber, operator).toString();

  return [expression, result];
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGameLogics(getQuestionWithAnswer, description);
};
export default runCalcGame;
