function alphabetPosition(text) {
  const splitedString = text.split("");
  let charCodeArray = [];
  let sortedArray = [];
  console.log(splitedString);
  for (let i = 0; i < splitedString.length; i++) {
    console.log(splitedString[i].charCodeAt(0));
    charCodeArray.push(splitedString[i].charCodeAt(0));
  }
  console.log(charCodeArray);
  for (i = 0; i < charCodeArray.length; i++) {
    if (charCodeArray[i] >= 65 && charCodeArray[i] <= 90) {
      console.log(charCodeArray[i]);
      sortedArray.push(charCodeArray[i]-64);
      console.log(sortedArray);
    } else if (charCodeArray[i] >= 97 && charCodeArray[i] <= 122) {
      sortedArray.push(charCodeArray[i]-96);
      console.log(sortedArray);
    } else {
      console.log(charCodeArray[i]);
      console.log(charCodeArray[i]);
    }
  }
  return sortedArray.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
