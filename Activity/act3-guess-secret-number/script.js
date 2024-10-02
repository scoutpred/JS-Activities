//console.log("JS loaded!"); //For Debug

console.log("Welcome!")

var secretNumber = Math.ceil(Math.random()*10);

//console.log("Debug: Secret Number is : " + secretNumber); //For Debug

var attempts = 0;

var guessedNumber;

do{
    //console.log("Debug: Current Attempt : " + (attempts + 1)); // For Debug

    guessedNumber = prompt("Guess the number, from 1 to 10.");
    attempts++;

    if(secretNumber > guessedNumber){
        console.log("Too low! Try again.");
    }else if(secretNumber < guessedNumber){
        console.log("Too high! Try again.");
    }else{
        console.log("Congratulations! You guessed the correct number: " + secretNumber);
        console.log("It took you " + attempts + " attempts.")
        console.log("Game Over")
    }
}
while (secretNumber != guessedNumber);
