/**
 * Write a program that takes a year as input and outputs the Year is a Leap Year or nota Leap Year.
 * A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const yr = prompt('Enter year (YYYY): ');
if ( ( ( yr % 4 == 0 ) && ( yr % 100 != 0 ) ) || ( yr % 400 == 0 ) ) {
    console.log(yr +" is a leap year");
}
else {
    console.log(yr +" is a not leap year");
}
 