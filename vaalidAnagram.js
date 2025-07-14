function isAnagram(s,t) {
    const setGram = new Set()
    const splitedS = s.split("")
    setGram.add(splitedS)
    console.log(splitedS)
    const splitedT = t.split("")
    console.log(setGram.has(splitedT))
    for (i = 0; i >= splitedS.length; i++){
        if (splitedS.has(splitedT[i]) === true) {
            re
        }
    }
}


isAnagram("racecar", "carrace");