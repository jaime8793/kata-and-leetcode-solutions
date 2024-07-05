function findShort(s) {
    let splitedString = s.split(" ")
    let emptyArray = []
    console.log(splitedString)
    for (i = 0; i < splitedString.length; i++){
        emptyArray.push(splitedString[i].length); 
        //console.log(emptyArray)
    }
    //console.log(emptyArray.sort())
    let sortedEmptyArray = emptyArray.sort();
    return sortedEmptyArray[0]
}

findShort("bitcoin take over the world maybe who knows perhaps")