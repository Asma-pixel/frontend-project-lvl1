import runGameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const calcExpression = (firstNumber, secondNumber, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return result;
};

const getQuestionWithAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const indexFirstOperator = 0;
  const indexLastOperator = 2;

  const operatorQualifier = getRandomNumber(indexFirstOperator, indexLastOperator);
  const operators = ['+', '-', '*'];
  const operator = operators[operatorQualifier];

  const expression = `${firstNumber} ${operator} ${secondNumber}`;

  const result = calcExpression(firstNumber, secondNumber, operator).toString();

  return [expression, result];
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGameLogics(getQuestionWithAnswer, description);
};
export default runCalcGame;
