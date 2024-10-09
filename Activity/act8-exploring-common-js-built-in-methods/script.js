// Calculate the square root of a given number
const num = 25;
const sqroot = Math.sqrt(num);
console.log(`Sq. Root of ${num} is ${sqroot}.`);

// Generate a random number between 1 and 10
const randnum = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randnum}`);

// Convert a string representation of a number to an actual number
const strnum = '24';
const parsenum = parseInt(strnum);
console.log(`Parsed number: ${parsenum}`);

// Check if a value is not a number
const notanum = 'Hello';
console.log(`Is "${notanum}" not a number? ${isNaN(notanum)}`);

// Convert a number to a string
const numstr = 42;
const tostr = numstr.toString();
console.log(`Number as a string: ${tostr}`);