const conditionalSum = function(values, condition) {
  //your code here
  let cond = 0;
  for (let i = 0; i < values.length; i++) {
    //evens
    if (condition === "even" && values[i] % 2 === 0) {
      //setting conditional for divisible by 2 true
      cond += values[i];
    }
  }
  for (let i = 0; i < values.length; i++) {
    //odds
    if (condition === "odd" && values[i] % 2 !== 0) {
      //setting conditional for divisible by 2 false
      cond += values[i];
    }
  }
  return cond; //returns even/odd conditional
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
