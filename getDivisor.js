function getDivisorsCnt(n) {
    let emptyArray = [];
    if (n % 2 === 0) {
        for (i = 1; i <= n; i++) {
            if (n % i === 0) {
                emptyArray.push(i);
            } else {
                console.log(i);
            }
        }
        console.log(emptyArray);
        return emptyArray.length;
    } else {
        for (i = 1; i <= n; i+=2) {
          if (n % i === 0) {
            emptyArray.push(i);
          } else {
            console.log(i);
          }
        }
        console.log(emptyArray);
        return emptyArray.length;
    }
}
getDivisorsCnt(54);

//optimised solution
function getDivisorsCnt(n) {
  if (n === 1) return n;

  // Use formuls http://vk.cc/4G1m8t
  let divArr = [[2, 0]]; // 'divisor', 'number'
  let div = divArr[0][0]; // first divisor

  while (n > 1) {
    if (n % div === 0) {
      for (let i = 0; divArr.length; i++) {
        if (divArr[i][0] === div) {
          divArr[i][1] += 1;
          break;
        } else {
          if (i === divArr.length - 1) {
            divArr.push([div, 1]);
            break;
          }
        }
      }
      n /= div;
    } else {
      div += 1;
    }
  }

  for (let i = 0; i < divArr.length; i++) {
    n *= divArr[i][1] + 1;
  }

  return n;
}
