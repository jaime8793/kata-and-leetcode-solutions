function solution(str) {
  console.log(str);
  let emptyArray = [];
  let splitedString = str.split("");
  console.log(splitedString);

  for (i = 0; i < splitedString.length; i += 2) {
    if (splitedString.length % 2 == 1) {
      // console.log(splitedString[splitedString.length - 1]);

      if (splitedString[i + 1] === undefined) {
        emptyArray.push(splitedString[i] + "_");
        return emptyArray;
      }
      emptyArray.push(splitedString[i] + splitedString[i + 1]);
    } else {
      emptyArray.push(splitedString[i] + splitedString[i + 1]);
    }
  }
  return emptyArray;
}

console.log(solution("abcdefg"));
