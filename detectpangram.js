function isPangram(string) {
    //...
    const splitedString = string.split("")
    const asciiNumz = []
    const asciiNumz2 = []
    console.log(splitedString)

    for (let index = 0; index < 26; index++) {
        asciiNumz.push(index + 97)

    }
    for (let index = 0; index < splitedString.length;  index++) {
       asciiNumz2.push(string.charCodeAt(index));
    }

    console.log(asciiNumz2)

    asciiNumz2.map((ascii) => {
        console.log(ascii)
        
    })

    return true
}


isPangram("The quick brown fox jumps over the lazy dog.");