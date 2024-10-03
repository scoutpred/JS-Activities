//console.log("JS loaded!"); //For Debug

    //Topic 1

    console.log("   ===   \n Topic 1 \n   ===   ");

let fruits = ['apple', 'banana', 'orange', 'lemon'];
fruits.push('kiwi');
console.log("Fruit Array : ", fruits)

    //Topic 2

    console.log("   ===   \n Topic 2 \n   ===   ");

console.log('First Fruit: ', fruits[0]);
console.log('Last Fruit:', fruits[fruits.length - 1]);

    //Topic 3

    console.log("   ===   \n Topic 3 \n   ===   ");

fruits[1] = 'grape';

//console.log("Appended ", fruits[1], " in index 1 of the fruits array."); //For Debug
//console.log("Element to be popped: ", fruits[fruits.length - 1]); //For Debug

fruits.pop();
console.log('Modified Array: ', fruits);

    //Topic 4

    console.log("   ===   \n Topic 4 \n   ===   ");

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
};

    //Topic 5

    console.log("   ===   \n Topic 5 \n   ===   ");

fruits.forEach(function(fruit){
console.log(fruit);
});

//Alternate for arrow function
//fruits.forEach((fruit) => console.log(fruit));

    //Topic 6

    console.log("   ===   \n Topic 6 \n   ===   ");

let numbers = [10, 20, 30, 40, 50];
console.log('Index of 30: ', numbers.indexOf(30));
console.log('Includes 40: ', numbers.includes(40));

numbers.push(60);
numbers.shift();
console.log('Updated array:', numbers);

    //Topic 7

    console.log("   ===   \n Topic 7 \n   ===   ");

let slicedArray = numbers.slice(1,4);
console.log('Sliced array:', slicedArray);

    //Topic 8

    console.log("   ===   \n Topic 8 \n   ===   ");

let removedElements = numbers.splice(1, 2);
console.log('Removed elements: ', removedElements);
console.log('Updated array: ', numbers);