function solution(number) {
  let emptyArray = [];
  if (number <= 0) return false;
  for (i = 1; i < number; i++) {
    if (i % 3 == 0) {
      console.log(i);
      emptyArray.push(i);
    } else if (i % 5 == 0) {
      console.log(i);
      emptyArray.push(i);
    } else {
      console.log(i);
    }
    console.log(emptyArray);
  }
  let sum = 0;

  emptyArray.map((a) => {
    return (sum += a);
  }, 0);
  console.log(sum);
  return sum;
}

solution(10);
