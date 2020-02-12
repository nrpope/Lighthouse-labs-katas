// Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times,
// if there are multiple sets of values each set should be separated by a comma.
// If there is only one set of values then you should omit the comma.

let repeatNumbers = function(data) {
  // Put your solution here
  let numbers = "";
  data.forEach(array => {
    for (let i = 0; i < array[1]; i++) {
      numbers += array[0];
    }
    numbers += ", ";
  });
  return numbers;
};
console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3]
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
  ])
);
