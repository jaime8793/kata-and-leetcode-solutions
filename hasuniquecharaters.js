function hasUniqueChars(str) {
  let compareStringArray = [];
  let newStringArray = str.split("");
  for (i = 0; i < newStringArray.length; i++) {
    let currentString = newStringArray[i];
    compareStringArray.push(newStringArray[i]);
    newStringArray.splice(i, 1);
    if (newStringArray.includes(currentString)) {
      return false;
    }
  }
  return true;
}

hasUniqueChars("this");
