// Check to see if passed in string is a palindrome (same forwards and backwards)
// Should be able to filter out any non alphabet characters( %, !, *, etc.) before checking if passed in string is palindrome

// ex. isPalindrome('ra!cec%ar') === true

function isPalindrome(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var filteredStr = '';

  for (var i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i].toLowerCase())) {
      filteredStr += str[i];
    }
  }
  var reversed = filteredStr.split('').reverse().join('');

  if (reversed === filteredStr) {
    return true;
  } else {
    return 'Is not a palindrome.';
  }
}


isPalindrome('ra!cec%ar'); // true