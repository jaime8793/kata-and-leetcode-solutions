function high(x) {
    let splitedWords = x.split(" ")
    let arrayASCII = []

    splitedWords.forEach(element => {
        let elementSplited = element.split("")
        console.log(elementSplited)
        let combinedASCII = 0
        elementSplited.forEach((letter) => {
            combinedASCII += letter.charCodeAt(0) - 96;
        })
        arrayASCII.push(combinedASCII)
        console.log(elementSplited)
    });
    let i = arrayASCII.indexOf(Math.max(...arrayASCII));
    console.log(arrayASCII);
    console.log(splitedWords[i]);
    return splitedWords[i]
}
high('what time are we climbing up the volcano')