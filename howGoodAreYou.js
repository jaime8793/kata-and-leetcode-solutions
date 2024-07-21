function betterThanAverage(classPoints, yourPoints) {
    let numberOfStudents = classPoints.length
    console.log(numberOfStudents)
    let sum0 = 0
    let sum = classPoints.map((mate) => {
        sum0 += mate
        
    })
    console.log(sum0 / numberOfStudents)
    let average = sum0 / numberOfStudents
    if (average > yourPoints) {
        console.log(false)
        return false
    } else {
        return true
    }
}
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)