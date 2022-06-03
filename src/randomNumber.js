/**
 * the function that returns a random number from 1 to limit
 * @param {number} limit - parameter that specifies the largest number that the function can return
 */
const getRandomNumber = (limit) => {
  const result = Math.floor(Math.random() * limit) + 1;
  return result;
};

export default getRandomNumber;
