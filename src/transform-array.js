const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arrIn) {
  const author = 'frontend200tb';
  console.log(arrIn);
  if (!Array.isArray(arrIn)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let arrOut = [];
  for (let i = 0; i < arrIn.length; i++) {
    switch (true) {
      case arrIn[i] === "--discard-next":
        if (i === arrIn.length - 1) break;
        i++;
        break;
      case arrIn[i] === "--discard-prev":
        if (arrOut.length === 0 || !arrOut.includes(arrIn[i - 1])) break;
        arrOut.pop();
        break;
      case arrIn[i] === "--double-next":
        if (i === arrIn.length - 1) break;
        arrOut.push(arrIn[i + 1]); break;
      case arrIn[i] === "--double-prev":
        if (arrOut.length === 0 || !arrOut.includes(arrIn[i - 1])) break;
        arrOut.push(arrOut[arrOut.length - 1]); break;
      default: arrOut.push(arrIn[i]);
    }
  }
  return arrOut;
}

module.exports = {
  transform
};
