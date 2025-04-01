/*let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);   //456
*/

/*let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

*/

// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };

//   const c = obj.b;

//   obj.b();
//   c();

let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => number * 2);
console.log(numbers);
console.log(numbers.reduce((total, num) => total + num, 0));
