function fibsRec(n) {
  // Base cases
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  
  const fibsArray = fibsRec(n - 1); // Get the Fibonacci sequence up to (n-1)

  // Add the next Fibonacci number to the array
  fibsArray.push(
    fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]
  );

  return fibsArray;
}

console.log(fibsRec(16)); // Output: [0, 1, 1]
