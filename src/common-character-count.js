const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0;
	let counter;
	let indx;
	let arr1 = s1.split('');
	let arr2 = s2.split('');
	function checker(item){
		counter = 0;
		indx = undefined;
		arr2.forEach((itm, index) => itm == item && counter == 0 ? (counter++, count++, indx = index) : null);
		indx !== undefined ? (arr2 = arr2.map((itm, index) => {return indx == index ? null : itm}).filter(x => x !== null)) : null;
	}
	arr1.forEach(item => checker(item));
	return count;
}

module.exports = {
  getCommonCharacterCount
};
