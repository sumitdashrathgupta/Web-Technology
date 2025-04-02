const n = Number(prompt("Enter the number"));

if (isNaN(n)) {
  console.log("invalid Input");
} else {
  if (n > 0) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      sum = i + n;
    }
    console.log(sum);
  } else {
    console.log("Don't Enter Negatival value");
  }
}
