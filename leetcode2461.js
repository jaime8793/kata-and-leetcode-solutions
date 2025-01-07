function maximumSubarraySum(array, k) {
    let total = array.splice(0, k).reduce((a, b) => a + b)
    console.log(total)
    let maxTotal = total
    for (i = 1; i < array.length; i++){
        total -= array[i];
        total += array[i + k]
        console.log(total,maxTotal)
        maxTotal = Math.max(total, maxTotal)
    }
    console.log(maxTotal)
    return maxTotal
}

maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);