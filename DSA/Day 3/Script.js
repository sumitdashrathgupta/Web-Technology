let value = Number(prompt("Enter the number"));

if (value == 0 || value == 1) {
  console.log("1");
} else {
  console.log(value * (value - 1));
}
