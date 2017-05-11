var buds = [{
	name: 'bob',
  broStatus: true
}, {
	name: 'joe',
  broStatus: false
}, {
	name: 'emcee David James',
  broStatus: true
}, {
	name: 'jimmi',
  broStatus: true
}, {
	name: 'smitts',
  broStatus: false
}];

// For each bud, check to see if they are a bro. If they are a bro, send them to an array with other bros.
// Make use of at least one of the following methods(reduce, map, forEach, filter).

function whoseABro(people) {
	return people.reduce(function(bros, val) {
		if(val.broStatus) {
			bros.push(val.name);
		}
		return bros;
	}, []);
}

whoseABro(buds);

// extra credit: some of your buds are better than others. 
// From time to time you need to update your list. Write a function that takes a bud, and updates the bro status.

function swipeLeft(people, removedPerson) {
  people.forEach(function(val) {
    if (val.name === removedPerson) {
      val.broStatus = false;
    }
  });
  return people;
}

swipeLeft(buds, 'bob');