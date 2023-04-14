const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let sum = 0;
	function checker(item, index){
		if(index == 0){
			item.forEach(itm => sum += itm);
		} else{
			item.forEach((itm, indx) => matrix[index - 1][indx] == 0 ? null : sum += itm);
		}
	}
	matrix.forEach((item, index) => checker(item, index));
	return sum;
}

module.exports = {
  getMatrixElementsSum
};
