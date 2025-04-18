function nextBigger(n) {
  //your code here
  let stringArray = n.toString().split("");
  let ied = stringArray.length;
  function arraymove(arr, fromIndex, toIndex) {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
  }
  for (i = ied - 1; i >= 0; i--) {
    for (j = ied - 1; j >= 0; j--) {}
    if (Number(stringArray[i]) > Number(stringArray[i - 1])) {
      arraymove(n, i, i - 1);
    } else {
      return -1;
    }
  }
}
nextBigger(1443);
