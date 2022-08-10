'use strict'

function BinarioADecimal(Bnum) {
 // tu codigo va acá
 num = parseInt(Bnum,2);
      return num;

}


function DecimalABinario(num) {
  // tu codigo aca
  if (num <= 0) return '0';
  var array = [];
  while(num > 0){
    array.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return array.join(''); 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}