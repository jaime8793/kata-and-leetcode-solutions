function printerError(s) {
  // your code
  let result = s.match(/[a-m]/g);
  return `${s.length - result.length}/${s.length}`;
}
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");
