/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, i = 0, newStr = "") => {
  if(i === x){
     return newStr;
  };
  newStr = newStr + "hello";
  return solution(x, i + 1, newStr) 
};
module.exports ={ solution, };
