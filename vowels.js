let numberOfVowels = function(data) {
  // Put your solution here
  let amnt = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  //not considering "y" as a vowel for this
  for (let i = 0; i < data.length; i++) {
    //function for total number of vowels
    if (vowels.includes(data[i])) {
      amnt++;
      //function for including the vowel restriction into the number
    }
  }
  return amnt;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
