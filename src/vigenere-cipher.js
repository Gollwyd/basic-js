
class VigenereCipheringMachine {

    
    encrypt(str, kod) {
        let abcd = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let aStr = str.toUpperCase().split('');
        let aKod = kod.toUpperCase().split('');
        let otvet = [];
        while (aStr.length>aKod.length){
            aKod = [...aKod, ...aKod];
        }
        let counter = 0;
        aStr.forEach(function(item, i) {
            if (item.toLowerCase() == item.toUpperCase()){otvet.push(item); counter++;} else {
            let x = 0;
            let y = 0;
            for (let k =0; k< 26; k++) {if (item == abcd[k]) x = k;}
            for (let k =0; k< 26; k++) {if (aKod[i-counter] == abcd[k]) y = k;}
            let n = x+y;
            otvet.push(abcd[n]);  
            }
        });
        return otvet.join('');
    
    }

    decrypt(str, kod) {
        let abcd = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let aStr = str.toUpperCase().split('');
        let aKod = kod.toUpperCase().split('');
        let otvet = [];
        while (aStr.length>aKod.length){
            aKod = [...aKod, ...aKod];
        }
        let counter = 0;
        aStr.forEach(function(item, i) {
            if (item.toLowerCase() == item.toUpperCase()){otvet.push(item); counter++;} else {
            let x = 0;
            let y = 0;
            for (let k =0; k< 26; k++) {if (item == abcd[k]) x = k;}
            for (let k =0; k< 26; k++) {if (aKod[i-counter] == abcd[k]) y = k;}
            let n = 26 + x-y;
            otvet.push(abcd[n]);  
            }
        });
        return otvet.join('');
    
    }
}


module.exports = VigenereCipheringMachine;
/*
function encrypt(str, kod) {
    let abcd = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let aStr = str.split('');
    let aKod = kod.split('');
    let otvet = [];
    while (aStr.length<aKod.length){
        aKod = [...aKod, ...aKod];
    }
    aStr.forEach(function(item, i) {
        let x = 0;
        let y = 0;
        for (let k =0; k< 26; k++) {if (item == abcd[k]) x = k;}
        for (let k =0; k< 26; k++) {if (aKod[i] == abcd[k]) y = k;}
        let n = x+y;
        otvet.push(abcd[n]);  

    });
    return otvet.join('');

}

console.log(encrypt('bagcb', 'ccc'));
*/

