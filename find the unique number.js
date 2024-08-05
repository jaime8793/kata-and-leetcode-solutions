function findUniq(arr) {
  // Step 1: Find the first two distinct elements
  let a = arr[0];
  let b = arr.find((n) => n !== a);

  // Step 2: Count occurrences of the first element
  let countA = arr.filter((n) => n === a).length;

  // Step 3: Return the unique element
  return countA === 1 ? a : b;
}
