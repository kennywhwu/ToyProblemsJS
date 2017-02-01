// Given a string, collect a letter count for all letters in the world, then only return the letters that appear more than once. Be sure to reuturn in the form of an object.

// String will only contain lowercase letters from alphabet for simplicity

// ex. letterCount('testing') === {'t': 2}

function letterCount(str) {
  var result = {};

  // Make letter map, while iterating, if letter appears more than once, add keyvalue pair
  // to results object.
  str.split('').reduce(function(acc, element) {
    // If letter already counted, increment, otherwise set value to 1
    acc[element] = ++acc[element] || 1;
    // If letter appears more than once, adding to result object here
    if (acc[element] > 1) {
      result[element] = acc[element];
    }
    return acc;
  }, {});

  return result;
}



letterCount('testing') // === {'t': 2}
