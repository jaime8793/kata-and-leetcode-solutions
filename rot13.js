function rot13(message) {
  //your code here
  const splitedMessage = message.split("");
  const rot13Message = [];
    splitedMessage.map((letter) => {
        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            rot13Message.push((letter.charCodeAt(0) + 13) % 65);
        } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) >= 122) {
            rot13Message.push((letter.charCodeAt(0) + 13) % 97);
        } else {
            rot13Message.push(letter.charCodeAt(0));
        }
    })
  console.log(rot13Message);
}//cool

rot13("Cream")