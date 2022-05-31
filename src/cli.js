import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May i get yur name?\n');
  return name;
};

const usrGreeting = () => {
        const name = getName();
  const greeting = `Hello, ${name}!`;
  return greeting;
};

export default usrGreeting;
