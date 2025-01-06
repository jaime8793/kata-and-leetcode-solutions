function duplicateEncode(word) {
    let emptyArray = []
    const  sanctifiedWord = word.toLowerCase().split('')
    console.log(sanctifiedWord)
    for (i = 0; i < sanctifiedWord.length; i++){
        let sanctifiedWord2 = emptyArray.push(sanctifiedWord.splice(i, 1))
        console.log(sanctifiedWord2)
    }
  return "";
}

duplicateEncode("Success")