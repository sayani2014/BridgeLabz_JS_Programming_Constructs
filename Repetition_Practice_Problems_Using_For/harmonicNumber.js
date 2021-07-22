/**
 * Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form
 * H(n) = 1/1 + 1/2 + 1/3 + 1/4 + ... + 1/n
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const number = prompt('Enter the value of n: ');
let sum = 0;

process.stdout.write("The series is: ")
for ( i = 1; i <= Number(number); i++ ) {
    if ( i != Number(number)) {
       //To print the output in a single line
       process.stdout.write('1/' +i+ ' + ');
       sum += 1/i;
    }
    else {
        console.log('1/' +i);
        sum += 1/i;
    }
}
console.log("Harmonic Value for the series is: " +sum);





