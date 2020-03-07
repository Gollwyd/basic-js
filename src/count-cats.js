module.exports = function countCats(arr) {
 
  let number = 0;
  arr.forEach(item => {
    for (let k=0; k<item.length; k++) {
      if ( item[k]=='^^') number++;
    } 
  });
    
   return number;
}
