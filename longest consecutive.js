function longestConsec(strarr, k) {
  let length = strarr.length;
  console.log(length);
  let newArray = [];
  if (k > length || k <= 0) return "";
  if (k === 1)
    return strarr.sort(function (a, b) {
      return b.length - a.length;
    })[0];
    for (i = 0; i <= length - k; i++) {
        let newArray2 = [];
        for (j = 0; j < k; j++) {
            newArray2.push(strarr[i + j])
            console.log(newArray2)
            newArray.push(newArray2.join(""))
    }
  }
  console.log(newArray);
  return newArray.sort(function (a, b) {
    return b.length - a.length;
  })[0];
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 3);
