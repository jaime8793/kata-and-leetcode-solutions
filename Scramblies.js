function scramble(str1, str2) {
  // Create a frequency map for str1
  let charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if str2 can be formed
  for (let char of str2) {
    if (!charCount[char]) {
      return false; // Character is missing or used up
    }
    charCount[char]--; // Use the character
  }

  return true;
}
//heyyy
// Test cases
console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("jscripts", "javascript")); // false
console.log(scramble("ab", "aa")); // false
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
