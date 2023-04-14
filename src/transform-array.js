const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr){
	let discardNext = '--discard-next';
	let doubleNext = '--double-next';
	let discardPrev = '--discard-prev';
	let doublePrev = '--double-prev';
	let arrDelete = [];
	let arrDouble = [];
	arr.forEach((item, index) => item == doublePrev ? arrDouble.push(index - 1) : item == doubleNext ? arrDouble.push(index + 1) : item == discardNext ? arrDelete.push(index + 1) : item == discardPrev ? arrDelete.push(index - 1) : null);
	arr = arr.map(item => {return (item == discardPrev || item == discardNext) || (item == doublePrev || item == doubleNext) ? null : item}).filter(x => x !== null);
	// arrDelete = Array.from(new Set(arrDelete));
	// arrDouble = Array.from(new Set(arrDouble));
	return arr.map((item, index) => {return arrDelete.includes(index) ? null : arrDouble.includes(index) ? item * 2 : item}).filter(x => x !== null);
}

module.exports = {
  transform
};
