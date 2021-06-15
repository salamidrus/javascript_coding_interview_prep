const diff = (arr1, arr2) => [
  ...arr1.filter((e) => !arr2.includes(e)),
  ...arr2.filter((e) => !arr1.includes(e)),
];

const sym = (...args) => [...new Set(args.reduce(diff))];

// test here
sym([1, 2, 3], [5, 2, 1, 4]);

// Code Explanation

// The main function sym() reduces given arrays utilising helper function diff() to a single array. Also, it temporary converts the result to Set to remove duplicates.
// The function diff() returns the symmetric difference of two arrays by picking out elements in parameterised arrays; arr1 and arr2.
