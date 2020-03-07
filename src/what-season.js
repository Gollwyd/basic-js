module.exports = function getSeason(vremya = 1) {
  let season = '';
  if (vremya == 1) return 'Unable to determine the time of year!';
  let month = vremya.getMonth();
 
  if (month) {
  if (month == 11 ||month ==  0 || month == 1) return 'winter';
  if (month == 2 ||month ==  3 || month == 4) return 'spring';
  if (month == 5 ||month ==  6 || month == 7) return 'summer';
  if (month == 8 ||month ==  9 || month == 10) return 'autumn';
  } else return 'fall';


  
};
