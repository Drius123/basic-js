const { NotImplementedError } = require('../extensions/index.js');

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
let result;
let repat;
let separ;
function repeater(str, options) {
	repat = options.repeatTimes;
	result = str;
	if(options.separator){
		separ = options.separator;
		for(let i = 0; i < repat - 1; i++){
			result += separ + str;
		}
		return result;
	}
	for(let i = 0; i < repat - 1; i++){
		result += '+' + str;
	}
	return result;
}

module.exports = {
  repeater
};
