/**
 * Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const character = prompt('Enter a number to know the place value in Indian System: ');
 
if ( character == 1 ) {
    console.log("Units");
}
else if ( character == 10 ) {
    console.log("Tens");
}
else if ( character == 100 ) {
    console.log("Hundreds");
}
else if ( character == 1000 ) {
    console.log("Thousands");
}
else if ( character == 10000 ) {
    console.log("Ten thousands");
}
else if ( character == 100000 ) {
    console.log("Lakhs");
}
else if ( character == 1000000 ) {
    console.log("Ten Lakhs");
}
else if ( character == 10000000 ) {
    console.log("Crore");
}
else if ( character == 100000000 ) {
    console.log("Ten crore");
}
else if ( character == 1000000000 ) {
    console.log("Arab");
}
else if ( character == 10000000000 ) {
    console.log("Ten Arab");
}
else {
    console.log("Invalid input!");
}