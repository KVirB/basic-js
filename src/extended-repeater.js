const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  let addition = str;
  if (options.additionRepeatTimes !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (options.additionSeparator !== undefined) {
        addition += options.addition + options.additionSeparator;
      } else {
        addition += options.addition + "|";
      }
    }
  } else {
    if (options.addition !== undefined) {
      if (options.additionSeparator !== undefined) {
        addition += options.addition + options.additionSeparator;
      } else {
        addition += options.addition + "|";
      }
    }
  }
  if (options.addition !== undefined) {
    if (options.additionSeparator !== undefined) {
      addition = addition.slice(0, -options.additionSeparator.length);
    } else {
      addition = addition.slice(0, -1);
    }
  }

  if (options.repeatTimes !== undefined) {
    for (let j = 0; j < options.repeatTimes; j++) {
      if (options.separator !== undefined) {
        result += addition + options.separator;
      } else {
        result += addition + "+";
      }
    }
  } else {
    result += addition + options.separator;
  }
  if (options.separator !== undefined) {
    return result.slice(0, -options.separator.length);
  } else {
    return result.slice(0, -1);
  }
}

module.exports = {
  repeater,
};
