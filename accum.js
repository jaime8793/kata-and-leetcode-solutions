function accum(s) {
  const accumArray = [];
  for (i = 0; i < s.length; i++) {
    for (j = 0; j <= i; j++) {
      if (j === 0) {
        accumArray.push(s[i].toUpperCase());
      } else {
        accumArray.push(s[i].toLowerCase());
      }
    }
    accumArray.push("-");
  }
  const stringArray = accumArray.join("");
  console.log(stringArray.substring(0, stringArray.length - 1));
  return stringArray.substring(0, stringArray.length - 1);
}

