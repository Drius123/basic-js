const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
		let count = 1;
		let count_max = 1;
		function checker(item){
			count++;
			item.forEach(itm => Array.isArray(itm) ? checker(itm) : null);
			count_max > count ? count = 1 : (count_max = count, count = 1);
		}
		arr.forEach(item => Array.isArray(item) ? checker(item) : null);
		return count_max;
  }
}

module.exports = {
  DepthCalculator
};
