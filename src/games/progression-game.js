import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getQuestionWithAnswer = () => {
  const arrQuestionAnswer = [2];

  const numLimit = 100;
  const quanityLimit = 5;

  const a = getRandomNumber(numLimit);
  const d = getRandomNumber(numLimit);

  const quanityMembers = getRandomNumber(quanityLimit) + 5;
  const arrProgression = [quanityMembers];
  const indexHiddenMember = getRandomNumber(quanityMembers - 1);
  arrProgression[0] = a;
  for (let i = 1; i < quanityMembers; i += 1) {
    arrProgression[i] = arrProgression[i - 1] + d;
  }

  const answer = arrProgression[indexHiddenMember];
  arrProgression[indexHiddenMember] = '...';
  const question = arrProgression.join(' ');
  arrQuestionAnswer[0] = question;
  arrQuestionAnswer[1] = answer;
  return arrQuestionAnswer;
};
const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  gameLogics(getQuestionWithAnswer, description);
};
export default progressionGame;
