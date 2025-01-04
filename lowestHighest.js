function highAndLow(numbers) {
  let numbers1 = Number(numbers.split(" "))
  console.log(numbers1);
  let pointer1;
  let pointer2;
  const highLowArray = [numbers[0], numbers[numbers.length - 1]];
  console.log(numbers1[numbers1.length - 1]);

  for (i = 1; i <= numbers.length; i++) {
    if (numbers[i - 1] < highLowArray[0]) {
    }
  }
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
