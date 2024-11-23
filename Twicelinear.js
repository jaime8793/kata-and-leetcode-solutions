function dblLinear(n) {
  let arraySequence = [1];
  for (i = 1; i <= n * n; i++) {
    y = 2 * arraySequence[i - 1] + 1;
    z = 3 * arraySequence[i - 1] + 1;
    arraySequence.push(y);
    arraySequence.push(z);
  }
  
  let digits = [];
  arraySequence.map((digit) => {
    if (!digits.includes(digit)) {
      digits.push(digit);
    } else {
      ("");
      //console.log(digit);
    }
    //console.log(digits)
  });
  let soretedDigits = digits.sort((a, b) => {
    return a - b;
  });
    //console.log(soretedDigits)
    console.log(soretedDigits[n]);
  return soretedDigits[n];
}

dblLinear(100);
//could optimize further