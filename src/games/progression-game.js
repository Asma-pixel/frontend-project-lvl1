import gameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const generateProgression = (a, d, size) => {
  const progression = [size];
  progression[0] = a;
  for (let i = 1; i < size; i += 1) {
    progression[i] = progression[i - 1] + d;
  }
  return progression;
};
const getQuestionWithAnswer = () => {
  const arrQuestionAnswer = [2];

  const numLimit = 100;
  const quanityLimit = 5;

  const a = getRandomNumber(numLimit);
  const d = getRandomNumber(numLimit);

  const quanityMembers = getRandomNumber(quanityLimit) + 5;
  const arrProgression = generateProgression(a, d, quanityMembers);
  const indexHiddenMember = getRandomNumber(quanityMembers - 1);
  
  const answer = arrProgression[indexHiddenMember];
  arrProgression[indexHiddenMember] = '..';
  const question = arrProgression.join(' ');
  arrQuestionAnswer[0] = question;
  arrQuestionAnswer[1] = answer.toString();
  return arrQuestionAnswer;
};
const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  gameLogics(getQuestionWithAnswer, description);
};
export default progressionGame;
