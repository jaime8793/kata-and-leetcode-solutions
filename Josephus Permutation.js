function josephus(items, k) {
  let result = [];
  let index = 0; // Start index

  while (items.length > 0) {
    // Calculate the index of the element to remove
    index = (index + k - 1) % items.length;
    // Remove the element and push it to the result array
    result.push(items.splice(index, 1)[0]);
  }

  return result;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
