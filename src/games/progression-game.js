import runGameLogics from '../index.js';
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

  const maxMemberCount = 10;
  const minMemberCount = 5;
  const quanityMembers = getRandomNumber(minMemberCount, maxMemberCount);

  const firstMember = getRandomNumber();
  const delta = getRandomNumber();

  const arrProgression = generateProgression(firstMember, delta, quanityMembers);
  const indexHiddenMember = getRandomNumber(1, quanityMembers - 1);

  const answer = arrProgression[indexHiddenMember];
  arrProgression[indexHiddenMember] = '..';
  const question = arrProgression.join(' ');
  arrQuestionAnswer[0] = question;
  arrQuestionAnswer[1] = answer.toString();
  return arrQuestionAnswer;
};
const runProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  runGameLogics(getQuestionWithAnswer, description);
};
export default runProgressionGame;
