/**
 * Read a single digit number and write the number in word
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const character = prompt('Enter a number between 0 to 9: ');

if ( character == 0 ) {
    console.log("Zero");
}
else if ( character == 1 ) {
    console.log("One");
}
else if ( character == 2 ) {
    console.log("Two");
}
else if ( character == 3 ) {
    console.log("Three");
}
else if ( character == 4 ) {
    console.log("Four");
}
else if ( character == 5 ) {
    console.log("Five");
}
else if ( character == 6 ) {
    console.log("Six");
}
else if ( character == 7 ) {
    console.log("Seven");
}
else if ( character == 8 ) {
    console.log("Eight");
}
else if ( character == 9 ) {
    console.log("Nine");
}
else {
    console.log("You did not enter a single digit number!.");
}
