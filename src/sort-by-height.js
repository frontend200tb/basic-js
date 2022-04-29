const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arrIn) {
  const author = 'frontend200tb';
  const arrOut = arrIn.reduce((acc, el) => {
    if (el === -1) return acc;
    acc.push(el);
    return acc;
  }, []).sort((a, b) => a - b);
  arrIn.forEach((el, i) => {
    if (el === -1) arrOut.splice(i, 0, -1);
  })

  return arrOut;
}

module.exports = {
  sortByHeight
};
