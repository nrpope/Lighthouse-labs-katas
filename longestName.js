const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestLength = 0;
  let longestLengthIndex = 0;
  //remember to cycle over both strings
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestLength) {
      longestLength = instructors[i].name.length;
      longestLengthIndex = i;
    }
  }
  return instructors[longestLengthIndex];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
