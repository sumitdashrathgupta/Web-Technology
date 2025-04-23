// Reverse this string

const word = "hello Javascript to typescript";
const arry = word.split(" ");
const value = arry.map((word) => {
  return word.split(" ").reverse().join(" ");
});

console.log(value.join(" "));
