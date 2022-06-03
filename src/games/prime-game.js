import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getQuestionWithAnswer = () => {
  const limit = 100;

  const arrQuestionAnswer = [2];
  const question = getRandomNumber(limit) + 1;
  arrQuestionAnswer[0] = question;

  let answer = '';
  if (question === 2) {
    answer = 'yes';
    arrQuestionAnswer[1] = answer;
    return arrQuestionAnswer;
  }
  const largestDivisor = Math.floor(Math.sqrt(question));
  console.log(largestDivisor);
  for (let i = 2; i <= largestDivisor; i += 1) {
    if (question % i === 0) {
      answer = 'no';
      arrQuestionAnswer[1] = answer;
      return arrQuestionAnswer;
    }
  }
  answer = 'yes';
  arrQuestionAnswer[1] = answer;
  return arrQuestionAnswer;
};
const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  gameLogics(getQuestionWithAnswer, description);
};
export default primeGame;
