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
  let prev = mas[0];
  count = 0;
  for (let i = 0; i < mas.length; i++) {
    if (prev === mas[i]) {
      count += 1;
      str = count + prev;
    } else {
      count = 0;
    }
    prev = mas[i];
    result = str;
  }
  console.log(result);
}

module.exports = {
  encodeLine,
};
