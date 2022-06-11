import runGameLogics from '../index.js';
import getRandomNumber from '../randomNumber.js';

const generateProgression = (firstMember, step, length) => {
  const progression = [];
  progression[0] = firstMember;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};
const getQuestionWithAnswer = () => {
  const maxMemberCount = 10;
  const minMemberCount = 5;
  const quanityMembers = getRandomNumber(minMemberCount, maxMemberCount);

  const firstMember = getRandomNumber();
  const step = getRandomNumber();

  const arrProgression = generateProgression(firstMember, step, quanityMembers);
  const indexHiddenMember = getRandomNumber(1, quanityMembers - 1);

  const answer = arrProgression[indexHiddenMember].toString();
  arrProgression[indexHiddenMember] = '..';
  const question = arrProgression.join(' ');

  return [question, answer];
};
const runProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  runGameLogics(getQuestionWithAnswer, description);
};
export default runProgressionGame;
