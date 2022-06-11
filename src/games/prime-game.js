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
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};
const runPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runGameLogics(getQuestionWithAnswer, description);
};
export default runPrimeGame;
