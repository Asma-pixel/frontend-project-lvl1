const getRandomNumber = (limit) => {
  const result = Math.floor(Math.random() * limit) + 1;
  return result;
};

export default getRandomNumber;
