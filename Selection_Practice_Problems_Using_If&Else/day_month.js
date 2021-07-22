/**
 * Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const day = prompt('Enter the day: ');
const month = prompt('Enter the month: ');

if ( (month <= 6 && day <= 20) && (month >= 3 && day >= 20) && (day < 31) ) {
    console.log("True");
}
else {
    console.log("False");
}