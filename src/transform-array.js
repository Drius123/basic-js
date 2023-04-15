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
	if(!Array.isArray(arr)){
		const err = new Error('\'arr\' parameter must be an instance of the Array!');
		return err;
	}
	let discardNext = '--discard-next';
	let doubleNext = '--double-next';
	let discardPrev = '--discard-prev';
	let doublePrev = '--double-prev';
	let result = [];
	let arrDelete = [];
	let arrDouble = [];
	function checker(item, index){
		let check = 0;
		arrDouble.forEach(itm => itm == index ? check++ : null);
		check++;
		let arru = [];
		for (let i = 0; i < check; i++){
			arru.push(item);
		}
		return result = result.concat(arru);
	}
	arr.forEach((item, index) => item == doublePrev ? arrDouble.push(index - 1) : item == doubleNext ? arrDouble.push(index + 1) : item == discardNext ? arrDelete.push(index + 1) : item == discardPrev ? arrDelete.push(index - 1) : null);
	// arr = arr.map(item => {return (item == discardPrev || item == discardNext) || (item == doublePrev || item == doubleNext) ? null : item}).filter(x => x !== null);
	// arrDelete = Array.from(new Set(arrDelete));
	// arrDouble = Array.from(new Set(arrDouble));
	arr.forEach((item, index) => arrDelete.includes(index) ? null : arrDouble.includes(index) ? checker(item, index) : (item == discardPrev || item == discardNext) || (item == doublePrev || item == doubleNext) ? null : result.push(item));
	return result;
}

module.exports = {
  transform
};
