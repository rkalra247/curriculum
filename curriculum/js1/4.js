/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, word = "",total = "") => {
  if(n === 0) return total;
  total = total + word;
  return solution(n-1, word,total);
};

module.exports = {
  solution,
};
