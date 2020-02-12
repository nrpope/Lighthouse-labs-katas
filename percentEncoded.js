const urlEncode = function(text) {
  // Put your solution here
  let space = " ";
  let string = "";
  let encoded = "%20";
  //all of this is to set up the new strings to remove spaces and replace with %20
  let newString = text.trim(); //text.trim removes spaces in a new string

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === space) {
      string += encoded;
    } else {
      string += newString[i];
      //function to replace any spaces with a %20
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
