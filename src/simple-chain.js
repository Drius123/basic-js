const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	arr : [],
  getLength() {
		return this.arr.length;
  },
  addLink(value) {
		this.arr.push(`( ${value} )`);
		return this;
  },
  removeLink(position) {
		if(position > this.arr.length || typeof position != 'number' || position < 1){
			this.arr = []
			throw new Error('You can\'t remove incorrect link!');
		}
		this.arr = this.arr.map((item, index) => {return index == position - 1 ? null : item}).filter(x => x !== null);
		return this;
  },
  reverseChain() {
		this.arr.reverse();
		return this;
  },
  finishChain() {
		let newArr = this.arr;
		this.arr = []
		return newArr.join('~~');
  }
};

module.exports = {
  chainMaker
};
