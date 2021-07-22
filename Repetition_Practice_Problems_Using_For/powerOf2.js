/**
 * Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const number = prompt('Enter the value of n: ');

for ( i = 0; i <= Number(number); i++ ) {
    console.log(Math.pow(2, i));
}
