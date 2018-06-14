/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, newStr = "" ) => {
  if(x === 0)return newStr;
  newStr = newStr + "hello";
  return solution(x-1, newStr);
};

module.exports = {
  solution,
};
