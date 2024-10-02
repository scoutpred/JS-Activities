//console.log("JS loaded!"); //For Debug

var input = prompt("Input a score.");

if(input >= 90){
    console.log("Grade: A");
}else if(89 >= input && input >= 80){
    console.log("Grade: B");
}else if(79 >= input && input >= 70){
    console.log("Grade: C");
}else if(69 >= input && input >= 60){
    console.log("Grade: D");
}else{
    console.log("Grade: F");
}