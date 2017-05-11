/**
 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
  let max32 = 2147483647;
  let reversed = '';
  let stringNum = x.toString();
  
  for (let i = stringNum.length - 1; i >= 0; i--) {
    reversed += stringNum[i];
  }
  
  reversed = x > 0 ? parseInt(reversed) : parseInt(`-${reversed}`);
  
  return Math.abs(reversed) < max32 ? reversed : 0;
};