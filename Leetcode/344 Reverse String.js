var reverseString = function(s) {
    let newS = '';
    
    for (let i = s.length - 1; i >=0; i--) {
        newS += s[i];
    }
    
    return newS;
};