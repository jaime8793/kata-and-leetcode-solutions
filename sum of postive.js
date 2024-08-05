function positiveSum(arr) {
  let sum = 0;
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]  > 0) {
      console.log(i, arr[i]);
      sum = sum + arr[i];
    } else {
      console.log(i);
    }
    console.log(sum);
    
  }
    return sum;
}
positiveSum([1, -4, 7, 12]);
