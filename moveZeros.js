function moveZeros(arr) {
    let zeroArray = []
    let otherArray = []
    arr.map((element) => {
        if (element === 0) {
            zeroArray.push(0)
        } else {
            otherArray.push(element)
        }
    })
    return otherArray.concat(zeroArray);
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);