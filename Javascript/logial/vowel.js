let str = "Javascript";
let vowelsCount = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];

for(let i = 0; i < str.length; i++) {
  if(vowels.includes(str[i].toLowerCase())) {
    vowelsCount++;
  }
}

console.log("Number of vowels:", vowelsCount);
