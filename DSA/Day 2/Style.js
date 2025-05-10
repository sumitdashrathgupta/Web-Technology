// ? NAN === NaN //False
// ? isNaN(NaN) //True

//! Age valid Voter

/*let age=Number(prompt("Enter the age "))

if(age>=18){
    console.log("You can vote");
}
else if(isNaN(age)){
    console.log("wrong Input");
}
else{
    console.log("You can not vote");
}  */

//! Amount Discount

/*let Amount = Number(prompt("Enter the Amount"));
console.log("Amount = " + Amount);

if (Amount >= 0 && Amount <= 5000) {
  console.log(Amount);
} else if (Amount >= 5001 && Amount <= 7000) {
  let five_dis = Math.floor((Amount * 5) / 100);
  console.log("Discount price : " + five_dis);
  console.log(Amount - five_dis);
} else if (Amount >= 7001 && Amount <= 9000) {
  let ten_dis = Math.floor((Amount * 10) / 100);
  console.log("Discount price : " + ten_dis);
  console.log(Amount - ten_dis);
} else if (Amount > 9000) {
  let twe_dis = Math.floor((Amount * 20) / 100);
  console.log("Discount price : " + twe_dis);
  console.log(Amount - twe_dis);
} else {
  console.log("Price out or the range");
}*/

/*let dis = 0;
if (Amount >= 0 && Amount <= 5000) {
  dis = 0;
} else if (Amount >= 5001 && Amount <= 7000) {
  dis = 5;
} else if (Amount >= 7001 && Amount <= 9000) {
  dis = 10;
} else if (Amount > 9000) {
  dis = 20;
} else {
  console.log("Price out or the range");
}
console.log(Amount - Math.floor((dis * Amount) / 100));
*/

//! Bill

/*let Unit = Number(prompt("Enter the Unit"));
let amount = 0;
if (Unit > 400) {
  amount = (Unit - 400) * 13;
  Unit = 400;
}
if (Unit <= 400 && Unit > 200) {
  amount += (Unit - 200) * 8;
  Unit = 200;
}
if (Unit <= 200 && Unit > 100) {
  amount += (Unit - 100) * 6;
  Unit = 100;
}

amount += Unit * 4;

console.log(amount);
*/

