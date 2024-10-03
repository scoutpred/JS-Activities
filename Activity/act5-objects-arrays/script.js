//Step 1 - 4

const students = [
    {name: 'Jeremy', age: 23, grade: 'F'},
    {name: 'Dell Conagher', age: 31, grade: 'A'},
    {name: 'Mikhail', age: 45, grade: 'B'}   
]

console.log(students[1].name);

students.push({name: 'Mundy', age: 26, grade: 'C'});

for (let i=0; i < students.length; i++){
    console.log(`Name: ${students[i].name}, Age: ${students[i].age}`);
};

//Step 5 - 11

const book = {
    title: 'All Quiet on the Western Front',
    author: 'Erich Maria Remarque',
    year: 1928,

    getSummary: function() {
         return `${this.title}, written by ${this.author} in ${this.year}`;
    }
};

//console.log(book); //For Debug

console.log(book.title);

book.year = 1930;

//console.log(book); //For Debug
console.log(book.getSummary());

const library = [];

library.push(book);

console.log(library);

//Step 12 - 18

const car = {
    brand: 'McLaren',
    model: 'F1',
    year: 1992,

    startEngine: function() {
        return `${this.brand} ${this.model}'s engine is starting. NYOOOOOM!`;
    }
}

console.log(car.model);

car.year = 2023;

//console.log(car); //For Debug

console.log(car.startEngine());

const garage = [];

garage.push(car);

console.log(garage);

//Step 19 - 20

const person = {
    name: 'Ludwig',
    age: '35',
    city: 'Stuttgart'
}

console.log(person.age);

