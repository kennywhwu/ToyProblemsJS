// Check if the passed in movie is checked out of RedBox. If it is available, check out the movie, if it is not available, 
// return a string saying the movie is already checked out.

var movies = [{
	title: 'Animal House',
		checkedOut: false
	},
	{ title: 'The Avengers',
	checkedOut: true
	},
	{ title: 'Lassie',
	checkedOut: false
	}]

function checkoutMovie(list, title) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].title === title && !list[i].checkedOut) {
      list[i].checkedOut = true;
      return list[i].title + ' checked out.'
    } else if (list[i].title === title && list[i].checkedOut) {
      return list[i].title + ' not available.'
    }
  }
  return 'Title not found.'
}

checkoutMovie(movies, 'Lassie');