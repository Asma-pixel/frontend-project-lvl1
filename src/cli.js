import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const runUserGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
};

export default runUserGreeting;
