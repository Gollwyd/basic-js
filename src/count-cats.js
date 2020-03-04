module.exports = function countCats(arr) {
  throw 'Not implemented';
  let number = 0;
  arr.forEach (function(item, i, arr){
    for (let k=1; k<item.length; k++) {
      if (item[k-1] =='^' && item[k]=='^') number++;
    }
  })
  return number;
};
