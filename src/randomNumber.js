/**
 * the function that returns a random integer between the specified values.
 * @param {number} min - parameter that specifies the minimum number that the function can return
 * @param {number} max - parameter that specifies the maximum number that the function can return
 */
const getRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

export default getRandomNumber;
