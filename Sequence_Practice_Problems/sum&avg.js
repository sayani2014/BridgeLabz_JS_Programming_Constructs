/**
 * Write a program that reads 5 Random 2 Digit values then find their sum and the average
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const MAXCOUNT = 5 
let sum = 0 
let i = 0 
let avg = 0 
const num = [];

while ( i < MAXCOUNT ) {
    num[i] = Math.floor (Math.random() * 90 ) + 10;
    sum = sum += num[i];
    i++;
} 

console.log("Numbers are: " +num);
console.log("Sum is: " +sum);

avg = sum / MAXCOUNT;
console.log("Average is: " +avg);