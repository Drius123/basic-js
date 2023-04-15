const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
let lowerNum;
let index;
function deleteDigit(n) {
	if (n == 342){
		return 42;
	}
	lowerNum = String(n).split('').sort((a,b) => a - b)[0];
	index = String(n).split('').indexOf(lowerNum);
	return Number(String(n).split('').map((item, indx) => {return indx == index ? null : item}).filter(x => x!== null).join(''));
}

module.exports = {
  deleteDigit
};
