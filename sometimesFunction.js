function sometimes(fn) {
	var i = 0;
	return function(...args) {
  	++i
		return i < 3 || i % 2 ? fn(...args) : `hmm, I don't know!`
	}
}