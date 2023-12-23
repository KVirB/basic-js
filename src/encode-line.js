const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let mas = str.split("");
  let count = 1;
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] === mas[i + 1]) {
      count += 1;
    } else {
      result += count === 1 ? mas[i] : count + mas[i];
      count = 1;
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  encodeLine,
};
