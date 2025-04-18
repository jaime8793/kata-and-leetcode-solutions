function solution(string) {
    let splitedString = string.split("")
    let newString = []
    console.log(splitedString)
    for (i = 0; i < splitedString.length; i++){
        if (/[A-Z]/.test(splitedString[i])) {
            newString.push(' ')
            newString.push(splitedString[i])
        } else {
            newString.push(splitedString[i])
        }
    }
  return newString.join();
}
console.log(solution("camelCasingTest"));