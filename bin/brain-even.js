#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May i get yur name? ');
console.log(`Hello, ${name}`);

const getNextNum = () => {
  const num = Math.floor(Math.random() * 100);
  return num;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isStop = false;
  let counter = 0;

  while (!isStop) {
    const nextNum = getNextNum();
    const rightAnswer = isEven(nextNum) ? 'yes' : 'no';
    console.log('Question: ', nextNum);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      isStop = true;
    }

    if (counter >= 3) {
      isStop = true;
      console.log(`Congratulations, ${name}!`);
    }
  }
};
evenGame();
