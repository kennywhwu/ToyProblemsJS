var arrayOfItems = [1, 3, 5, 7, 9, 12];

// 41
// Pt. 1 - Return an array of all the numbers missing between the start and end of the array.
// ex: [1, 2, 5, 6] => [3, 4]

// Pt. 2 - After returning the array, combine the missing numbers array with the original array. When logging arrayOfItems, you should now have one array with all of the numbers from Pt. 1 added in.

// Pt. 3 - Now write a function that /\/\makes use of reduce/\/\ to generate an object where the value is a number from the new array, and the key is the letter whos place is represented by the number. Make sure the numbers are in order from lowest to highest. For example a: 1, b: 2, c: 3.

function missingSum(arr) {
  var result = [];
  for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(missingSum(arrayOfItems));

///////////////////////////////////// Pt 2 ////////////////////////////////

// Your code here //
var concating = missingSum(arrayOfItems);
arrayOfItems = arrayOfItems.concat(concating)
  .sort(function(a, b) {
    return a - b;
  });


console.log(arrayOfItems);

///////////////////////////////// Pt 3 ////////////////////////////////////

function makeObj(arr) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet = alphabet.split('');
  console.log(arr, 'arr');
  console.log(alphabet);

  return arr.reduce(function(acc, element, i) {
    console.log(i, 'i');
    acc[alphabet[i]] = i + 1;
    return acc;
  }, {});
}

console.log(makeObj(arrayOfItems));







