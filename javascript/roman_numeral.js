function romanNumeral(string) {
  // type your code here
  const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let res = 0;
  for (let i = 0; i < string.length; i++) {
    if (i + 1 < string.length && symbols[string[i]] < symbols[string[i+1]])
      res -= symbols[string[i]];
    else
      res += symbols[string[i]];
  }

  return res;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");
  console.log("Expecting: 4");
  console.log(romanNumeral('IV'));

  console.log("");
  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");
  console.log("Expecting: 6");
  console.log(romanNumeral('VI'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
