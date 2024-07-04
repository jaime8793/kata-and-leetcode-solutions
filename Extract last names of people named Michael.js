function getMichaelLastName(inputText) {
  console.log(inputText);
  let splitedString = inputText.split(/\s+/); // Split by any whitespace characters
  console.log(splitedString);
  let nextNameArray = [];

  for (let i = 0; i < splitedString.length - 1; i++) {
    if (
      splitedString[i] === "Michael" &&
      /^[A-Z]/.test(splitedString[i + 1].charAt(0))
    ) {
      // Remove punctuation from next word
      let nextName = splitedString[i + 1].replace(
        /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
        ""
      );
      nextNameArray.push(nextName);
    }
  }

  console.log(nextNameArray);
}

getMichaelLastName(
  "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?"
);
