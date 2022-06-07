import runGameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  const largestDivisor = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= largestDivisor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionWithAnswer = () => {
  const arrQuestionAnswer = [2];
  const question = getRandomNumber() + 1;
  arrQuestionAnswer[0] = question;

  const answer = isPrime(question) ? 'yes' : 'no';
  arrQuestionAnswer[1] = answer.toString();
  return arrQuestionAnswer;
};
const runPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runGameLogics(getQuestionWithAnswer, description);
};
export default runPrimeGame;
