//script.js

// Arrow functions
const greet = (name) => {
   // Log a greeting message
   console.log(`Hello, ${name}!`);
 };
 greet('John'); // Output: Hello, John!
 
 // Arrow function with implicit return
 const multiply = (a, b) => a * b;
 console.log(multiply(5, 7)); // Output: 35
 
 // Arrow function with array map
 const numbers = [1, 2, 3, 4, 5];
 const squaredNumbers = numbers.map(num => num * num);
 console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
 
 // Implicit return in arrow functions
 const isEven = (num) => num % 2 === 0;
 console.log(isEven(4)); // Output: true
 
 // Transforming a function expression to an arrow function
 function square(num) {
   return num * num;
 }
 console.log(square(3)); // Output: 9
 
 // Transformed to an arrow function
 const squareArrow = (num) => num * num;
 console.log(squareArrow(3)); // Output: 9
 
 // Template literals
 const name = 'Alice';
 const age = 25;
 console.log(`My name is ${name} and I am ${age} years old.`);
 
 // Destructuring arrays
 const arrayNumbers = [1, 2, 3, 4, 5];
 const [first, second, ...rest] = arrayNumbers;
 console.log(first, second, rest); // Output: 1 2 [3, 4, 5]
 
 // Destructuring objects
 const person = { name: 'Bob', age: 30, country: 'USA' };
 const { name: personName, age: personAge } = person;
 console.log(personName, personAge); // Output: Bob 30
 
 // Spread and rest operators
 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];
 const combinedArray = [...array1, ...array2];
 console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
 
 // Rest operator in function arguments
 const sum = (...numbers) => {
   return numbers.reduce((total, num) => total + num, 0);
 };
 console.log(sum(1, 2, 3, 4, 5)); // Output: 15
 
 // Enhanced object literals
 const firstName = 'Jane';
 const lastName = 'Doe';
 const personInfo = {
   firstName,
   lastName,
   fullName() {
     return `${this.firstName} ${this.lastName}`;
   },
 };
 console.log(personInfo.fullName()); // Output: Jane Doe
 
 // Default parameters
 const calculateArea = (length = 1, width = 1) => {
   return length * width;
 };
 console.log(calculateArea()); // Output: 1 (default values used)
 console.log(calculateArea(3, 4)); // Output: 12 (custom values used)
 
 // Default parameters with template literals
 const printMessage = (message = 'Hello, World!') => {
   console.log(message);
 };
 printMessage(); // Output: Hello, World!
 printMessage('Welcome!'); // Output: Welcome!
 
 // Destructuring with default values
 const settings = {
   theme: 'light',
   fontSize: 14,
   showNotifications: true,
 };
 
 const { theme, fontSize, showNotifications = false } = settings;
 console.log(theme, fontSize, showNotifications); // Output: light 14 true
 
 // Spread operator with objects
 const user = {
   name: 'John',
   age: 30,
 };
 
 const updatedUser = {
   ...user,
   location: 'USA',
 };
 console.log(updatedUser); // Output: { name: 'John', age: 30, location: 'USA' }

// Calculate the square root of a given number
const number = 16;
const squareRoot = Math.sqrt(number);
console.log(`Square root of ${number} is ${squareRoot}`);

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randomNumber}`);

// Convert a string representation of a number to an actual number
const strNumber = '42';
const parsedNumber = parseInt(strNumber);
console.log(`Parsed number: ${parsedNumber}`);

// Check if a value is not a number
const notANumber = 'Hello';
console.log(`Is "${notANumber}" not a number? ${isNaN(notANumber)}`);

// Convert a number to a string
const num = 42;
const str = num.toString();
console.log(`Number as a string: ${str}`);

