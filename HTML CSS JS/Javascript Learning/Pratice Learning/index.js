map()
Used to transform each element in an array.

It returns a new array.

✅ Example:
javascript
Copy
Edit
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
2. filter()
Used to filter elements based on a condition.

It returns a new array with only the elements that match the condition.

✅ Example:
javascript
Copy
Edit
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // Output: [2, 4]
3. reduce()
Used to reduce all elements into a single value (like sum, product, etc.)

It returns one value, not an array.

✅ Example:
javascript
Copy
Edit
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // Output: 10
acc is the accumulator (starts with 0).

num is the current value.

