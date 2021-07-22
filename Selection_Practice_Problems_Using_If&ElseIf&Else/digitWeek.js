/**
 * Read a Number and Display the week day (Sunday, Monday,...)
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const character = prompt('Enter a number between 1 to 7 to display the week day: ');

if ( character == 1 ) {
    console.log("Sunday");
}
else if ( character == 2 ) {
    console.log("Monday");
}
else if ( character == 3 ) {
    console.log("Tuesday");
}
else if ( character == 4 ) {
    console.log("Wednesday");
}
else if ( character == 5 ) {
    console.log("Thursday");
}
else if ( character == 6 ) {
    console.log("Friday");
}
else if ( character == 7 ) {
    console.log("Saturday");
}
else {
    console.log("Wrong input! There are only 7 days in a week.");
}