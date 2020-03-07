module.exports = function createDreamTeam(mem) {
  let team = '';
  if (typeof Array.isArray === 'undefined') {return false;}
  mem.forEach(el => {
    if (typeof el == 'string') {
      let matr = el.split('');
      let letter = matr[0];
      for (let i = 0; i<matr.length; i++) {
        
        if (matr[i]!=' ') {letter = matr[i]; break;}
      }
      
      team = team +letter;}
  });
  
  if (team == '') {return false;} else {return team.toUpperCase().split('').sort().join(''); }
  
}
/*
function createDreamTeam(mem) {
  let team = '';
  mem.forEach(el => {
    if (typeof el == 'string') {let matr = el.split(''); team = team + matr[0];}
  });
  
  if (team == '') return false; else return team.split('').sort().join(''); 
  
}

let a = createDreamTeam(['Madison', 'Walter', 'Nancy', 'Gloria', 'Kevin', 'Gabriel', 'Helen', 'Juan', 'Sandra', 'Brenda'
]);

console.log(a);
*/