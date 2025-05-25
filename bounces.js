function bouncingBall(h, bounce, window) {
  // your code here

  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let newBounce = 1;
    for (; h > window; ) {
      newBounce++;
      h = h * bounce;
    }
    let newbounce2 = newBounce * 2;
    return newbounce2 - 3;
  } else {
    return -1;
  }
}

console.log(bouncingBall(30, 0.66, 1.5));
