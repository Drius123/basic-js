const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	const err = new Error("Invalid date!");
	if(typeof date != 'object'){
		return 'Unable to determine the time of year!'
	}
	return date.getMonth() > 1 && date.getMonth() < 5 ? 'spring' : date.getMonth() > 4 && date.getMonth() < 8 ? 'summer' : date.getMonth() > 7 && date.getMonth() < 11 ? 'autumn' : 'winter';
}

module.exports = {
  getSeason
};
