function bouncingBall(h, bounce, window) {
  // your code here

  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let newBounce = 1;
    let newHeight = h * bounce
    while ( newHeight > window ) {
     
      newHeight *=  bounce;
       newBounce += 2;
    }
    let newbounce2 = newBounce
    return newbounce2;
  } else {
    return -1;
  }
}

console.log(bouncingBall(30, 0.66, 1.5));
