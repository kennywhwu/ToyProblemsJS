/**
 * @param {string[]} words
 * @return {string[]}
 */

const r1 = {
  q: 'q',
  w: 'w',
  e: 'e',
  r: 'r',
  t: 't',
  y: 'y',
  u: 'u',
  i: 'i',
  o: 'o',
  p: 'p'
};

const r2 = {
  a: 'a',
  s: 's',
  d: 'd',
  f: 'f',
  g: 'g',
  h: 'h',
  j: 'j',
  k: 'k',
  l: 'l'
};

const r3 = {
  z: 'z',
  x: 'x',
  c: 'c',
  v: 'v',
  b: 'b',
  n: 'n',
  m: 'm'
};

const findWords = function(words, result = []) {
  for (let word of words) {
    let rowMap = findRowMap(word);
    let oneRow = true;

    for (let letter of word) {
      letter = letter.toLowerCase();

      if (!rowMap[letter]) {
        oneRow = false;
        break;
      }
    }

    if (oneRow) result.push(word);
  }

  return result;
};

const findRowMap = (word) => {
  let first = word[0].toLowerCase();
  if (r1[first]) return r1;
  if (r2[first]) return r2;
  if (r3[first]) return r3;
};