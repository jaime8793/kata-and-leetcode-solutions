function countBy(x, n) {
  let z = [];
    for (i = 1; i <= n; i++){
        z.push(i*x)
    }
    console.log(z)
  return z;
}
countBy(2, 5);