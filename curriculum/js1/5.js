/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (x, F) => {
  if(x === 0){
    return false;
  };
  F();
  return solution(x-1, F);
};

module.exports = {
  solution,
};
