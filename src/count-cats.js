const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
let n;
function countCats(matrix) {
	n = 0;
	function counter(item){
		item.forEach(itm => itm == '^^' ? n += 1 : null);
	}
	matrix.forEach(item => counter(item));
	return n;
}

module.exports = {
  countCats
};
