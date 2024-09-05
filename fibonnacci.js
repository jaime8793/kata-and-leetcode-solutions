function fibonacci(n) {
  let fibsArray = [0, 1];
  for (let i = 0; i < n; i++) {
    console.log(
      fibsArray[fibsArray.length - 2] + fibsArray[fibsArray.length - 1]
    );
    fibsArray.push(
      fibsArray[fibsArray.length - 2] + fibsArray[fibsArray.length - 1]
    );
  }
    console.log(fibsArray)
    return fibsArray
}

fibonacci(6);
