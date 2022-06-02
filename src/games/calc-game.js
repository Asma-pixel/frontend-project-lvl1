import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRandomOperator = () => {
  const operatorQualifier = getRandomNumber();
  let operator = '';

  if (operatorQualifier <= 33) operator = '+';
  else if (operatorQualifier >= 66) operator = '*';
  else operator = '-';

  return operator;
};

const getQuestionWithAnswer = () => {
  const arrQuestionAnswer = [2];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const expression = `${firstNumber} ${operator} ${secondNumber}`;

  arrQuestionAnswer[0] = expression;
  switch (operator) {
    case '+': arrQuestionAnswer[1] = firstNumber + secondNumber; break;
    case '-': arrQuestionAnswer[1] = firstNumber - secondNumber; break;
    case '*': arrQuestionAnswer[1] = firstNumber * secondNumber; break;
    default:
      break;
  }

  return arrQuestionAnswer;
};

const calcGame = () => {
  const description = 'What is the result of the expression?';
  gameLogics(getQuestionWithAnswer, description);
};
export default calcGame;
