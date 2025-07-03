function containsDuplicate(array1) {
    const hashSet = new Set()
    // array1.forEach((element) => {
    for (let i = 0; i < array1.length; i++){

    
        if (hashSet.has(array1[i])) {
            console.log(hashSet)
            return true
        } else {
            hashSet.add(array1[i])
        }
}
    return false;
}

console.log(containsDuplicate([1,2, 2, 3, 3]))