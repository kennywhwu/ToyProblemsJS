/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t, count = 0, sPointer = s[count]) {
    if (s === '' && t === '') return true;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === sPointer) sPointer = s[++count];
        if (count === s.length) return true;
    }
    return false;
};