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
let result = [];
function repeater(str, options) {
	result = [];
	result.push(String(str));
	if(options.additionRepeatTimes){
		let addit = options.addition;
		if(options.additionSeparator !== undefined){
			for(let n = 0; n < options.additionRepeatTimes - 1; n++){
				addit += options.additionSeparator + options.addition;
			}
		} else {
			for(let n = 0; n < options.additionRepeatTimes - 1; n++){
				addit += '|' + options.addition;
			}
		}
		for(let i = 0; i < options.repeatTimes - 1; i++){
			result.push(addit);
			result.push(options.separator);
			result.push(String(str));
		}
		result.push(addit);
		return options.separator ? result.filter(x => x !== undefined).join('') : result.map(item => {return item == undefined ? '+' : item}).join('');
	}
	if(options.separator){
		for(let i = 0; i < options.repeatTimes - 1; i++){
			result.push(options.addition);
			result.push(options.separator);
			result.push(str);
		}
		return result.concat(options.addition).filter(x => x !== undefined).join('');
	}
	for(let i = 0; i < options.repeatTimes - 1; i++){
		result.push(str);
	}
	return result.join('+');
}

module.exports = {
  repeater
};
