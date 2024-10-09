// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const sqroot = (num) => {
    let sqrootval = num * num
    console.log(`Square root of ${num} is ${sqrootval}.`)
};
// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const greet = (name, age) => {
    console.log(`Hello, ${name}, and you are at the age of ${age}.`)
};

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = { fname: 'Mun', mname: 'Dee', lname: 'Mundy', age: 30, loc: `New Zealand`};
const { fname: personFirstName, lname: personLastName } = person;
console.log(personFirstName, personLastName);

// Task 4: Use the spread operator to merge two arrays into a single array.
const ReliableExcavationDemolition = ['Mikhail', 'Jane Doe', 'Jeremy', 'Tavish', 'Pyro', 'Spy'];
const BuildersLeagueUnited = ['Ludwig', 'Dell', 'Mundy'];
const TF2Characters = [...ReliableExcavationDemolition, ...BuildersLeagueUnited];
console.log(TF2Characters);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const rArea = (x = 1,y = 1) => x*y;

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `This is ${this.name}, and this person's age is ${this.age}.`;
    }
}
const TF2Scout = new Person('Jeremy', 23);
console.log(TF2Scout.introduce());


