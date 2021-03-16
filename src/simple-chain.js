const CustomError = require("../extensions/custom-error");

const chainMaker = {
    outputString: [],
    getLength() {
        return this.outputString.length;
    },
    addLink(value) {
      if (value === undefined) {
      this.outputString.push('( )');
      return this;
      }
        this.outputString.push('( ' + value + ' )');
        return this;
    },
    removeLink(position) {
       if (typeof position !== 'number') {
        this.outputString = [];
        throw new Error();
    }
        this.outputString.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.outputString.reverse();
        return this;
    },
    finishChain() {
        let x = this.outputString.join("~~");
        this.outputString = [];
        return x;
    }
};

module.exports = chainMaker;
