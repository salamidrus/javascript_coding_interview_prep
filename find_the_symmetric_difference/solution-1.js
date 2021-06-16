function sym() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  function symDiff(arrayOne, arrayTwo) {
    var result = [];

    arrayOne.forEach(function (item) {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    arrayTwo.forEach(function (item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    return result;
  }

  // Apply reduce method to args array, using the symDiff function
  return args.reduce(symDiff);
}

// Code Explanation
// push() is used to break down the arguments object to an array, args.
// The symDiff function finds the symmetric difference between two sets. It is used as a callback function for the reduce() method called on args.
// arrayOne.forEach() pushes the elements to result which are present only in arrayOne as well as not already a part of result.
// arrayTwo.forEach() pushes the elements to result which are present only in arrayTwo as well as not already a part of result.
// The result, which is the symmetric difference is returned. This solution works for any number of sets.
