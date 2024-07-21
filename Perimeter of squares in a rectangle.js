function fibonnaci(m) {
  console.log(m);
  let sum = 0;
  let fibArray = [1, 1];
  for (i = 2; i <= m; i++) {
    console.log(fibArray);
    console.log(fibArray[i - 2] + Number(fibArray[i - 1]));
    fibArray.push(fibArray[i - 2] + Number(fibArray[i - 1]));
  }
    console.log(fibArray);
    let sum2 =fibArray.map((x) => {
        return sum += x
    })
    console.log(fibArray)
    console.log(sum2)
    console.log(sum2[sum2.length-1]);
    return sum2[sum2.length - 1];
}


//console.log(fibonnaci(5));
function perimeter(n) {
    if (n === 0) return 4
    let sum = 0
    for (i = 5; i < n;i++){
        sum++
    }
    console.log(sum)
  return fibonnaci(n) * (4);
}



console.log(perimeter(30))
