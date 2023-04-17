const { NotImplementedError } = require('../extensions/index.js');

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
	let res = [];
	let counter = 1;
	str.split('').forEach((item, index, arr) => item == arr[index + 1] ? counter++ : counter > 1 ? (res.push(`${counter}${arr[index - 1]}`), counter = 1) : res.push(item));
	return res.join('');
}

module.exports = {
  encodeLine
};
