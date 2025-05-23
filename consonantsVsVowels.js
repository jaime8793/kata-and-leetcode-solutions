function getCount(words) {
  console.log(typeof words);
  if (typeof words === "string") {
    let vowels = [];
    let consonants = [];
    let lowerWords = words.toLowerCase();
    const splitedWord = lowerWords.split("");
    console.log(splitedWord);
    splitedWord.map((letter) => {
      let charCode = letter.charCodeAt(0);
      console.log(charCode);
      if (charCode >= 97 && charCode <= 122) {
        if (
          letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u"
        ) {
          vowels.push(letter);
        } else {
          consonants.push(letter);
        }
      } else {
        console.log(letter);
      }
    });
    return { vowels: vowels.length, consonants: consonants.length };
  } else {
    return { vowels: 0, consonants: 0 };
  }
}

console.log(getCount("TEst"));
