function ipsBetween(start, end) {
  splitedIspStart = start.split(".");
  splitedIspEnd = end.split(".");
  let addedIsp = [];
  let addedIsp2 = [];
  let j = 3;
  for (i = 0; i < splitedIspStart.length; i++) {
    addedIsp.push(Number(splitedIspStart[i] * 256 ** j));
    addedIsp2.push(Number(splitedIspEnd[i] * 256 ** j));
    j += -1;
  }
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < addedIsp.length; i++) {
    sum += addedIsp[i];
    sum2 += addedIsp2[i];
  }
    console.log(sum2-sum)
  return sum2 - sum;
}
ipsBetween("150.10.0.0", "150.0.0.1");
