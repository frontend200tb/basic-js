const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) {
      this.chain.push("null");
    }
    else {
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0 || position - 1 >= this.chain.length) {
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    try {
      return `( ${this.chain.join(" )~~( ")} )`
    }
    finally {
      this.chain = [];
    }
  }
};

module.exports = {
  chainMaker
};
