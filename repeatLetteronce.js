function doubleChar(str) {
  // Your code here
  let splitedString = str.split("");
  console.log(splitedString);
  let newArray = [];
  for (i = 0; i < splitedString.length; i++) {
    console.log(splitedString[i]);
    newArray.push(splitedString[i], splitedString[i]);
    console.log(newArray.join(""));
  }
  return newArray.join;
}

doubleChar("Hello World");
