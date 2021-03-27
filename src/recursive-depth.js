const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        let depth =1
         depth += this.calculateDepth(elem) ;
        maxDepth = depth > maxDepth ? depth : maxDepth;
        
      }
    });
    return maxDepth
  }
};