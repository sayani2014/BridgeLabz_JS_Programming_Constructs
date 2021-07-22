/**
 * Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const MAXCOUNT = 5; 
let count = 0; 
const number=[]; 

while ( count < MAXCOUNT ) {
    number[count] = Math.floor( Math.random() * 900 ) + 100;
    count++;
}

console.log("Random numbers are: " +number);

let max = number[1];
let min = number[1];

for ( i = 0; i < number.length; i++) {
    if ( number[i] > max ) {
        max = number[i];
    }
    if ( number[i] < min ) {
        min = number[i];
    }
}

console.log("Maximum is : " +max);
console.log("Minimum is : " +min); 