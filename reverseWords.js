function reverseWords(str) {
  // Go for it
    let splitedString = str.split(" ");
    let reversedStrings =[]
    console.log(splitedString);
    splitedString.map((word) => {
        console.log(word.split("").reverse().join(''));
       reversedStrings.push(word.split("").reverse().join(""));
    })
    console.log(reversedStrings.join(' '))
  console.log(reversedStrings);
    return reversedStrings.join(' ');
}



reverseWords("This is the word");
