let capitals = function (word) {
  // Write your code here
  const splitedString = word.split("");
  console.log(splitedString);
  let upperCaseArray = [];
  let lowerCasArray = [];

  for (i = 0; i < splitedString.length; i++) {
    if (splitedString[i] == splitedString[i].toLowerCase()) {
      // The character is lowercase
      lowerCasArray.push(i);
      console.log(upperCaseArray);
    } else {
      // The character is uppercase
      upperCaseArray.push(i);
      console.log(lowerCasArray);
    }
  }
  return upperCaseArray;
};
capitals("CodEWaRs");
