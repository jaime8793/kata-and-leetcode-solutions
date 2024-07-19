function humanReadable(seconds) {
  console.log(seconds / 60);
  let num = seconds;
  let counter = 0;
  let counter2 = 0;
  if (seconds <= 59) {
    return `00:00:${seconds}`;
  } else {
    while (num > 59) {
      num -= 60;
      counter++;
    }
    while (counter > 59) {
      counter -= 60;
      counter2++;
    }
    counter2 = String(counter2).padStart(2, "0");
    counter = String(counter).padStart(2, "0");
    num = String(num).padStart(2, "0");
    console.log(counter, counter2, num);
    return `${counter2}:${counter}:${num}`;
  }
}
humanReadable(60);
