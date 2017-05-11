/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s, charmap = {}, result = []) {
    for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      if (charmap[letter]) charmap[letter]++;
      else charmap[letter] = 1;
    }
    
    for (let char in charmap) {
      result.push([ char, charmap[char] ]);
    }
    
    result.sort((a, b) => b[1] - a[1]);
    
    return result.reduce((newarr, letter) => {
      while (letter[1] > 0) {
        newarr.push(letter[0]);
        letter[1] -= 1;
      }
      return newarr;
    }, []).join('');
};