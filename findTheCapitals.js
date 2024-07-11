let capitals = function (word) {
  // Write your code here
  console.log(word);
  let splitedWord = word.split("");
  let returnArray = [];
  console.log(splitedWord);
  for (i = 0; i < splitedWord.length; i++) {
    console.log(i);
    if (splitedWord[i] == splitedWord[i].toUpperCase()) {
        returnArray.push(i);
        console.log(returnArray)
    }
  }
};

capitals("CodEWaRs");
