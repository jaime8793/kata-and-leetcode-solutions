let number = function (array) {
    if (array.length === 0) return []
    let newArray = []
    for (i = 0; i < array.length; i++){
        newArray.push(`${i+1}: ${array[i]}`);
    }
    console.log(newArray)
};
number(["a", "b", "c"]);
