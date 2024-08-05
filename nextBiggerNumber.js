function nextBigger(n) {
  //your code here
  let splitedNumber = n.toString().split("");
  let digits = splitedNumber.map((digit) => {
    return Number(digit);
  });
   let sortedDigits =  digits.sort((a, b) => {
        return b-a
   })
    console.log(splitedNumber, digits, sortedDigits.join(""));
    let joinedDigits = sortedDigits.join("")
    console.log(Number(joinedDigits))
    let joinedDigitsNumber = Number(joinedDigits);
    if (n === joinedDigitsNumber) {
        return -1
    } else {
        return joinedDigitsNumber
    }
  
}
nextBigger(144);
//note this code returned biggest number 