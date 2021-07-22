/**
 * Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
      1. a + b * c 
      2. a % b + c
      3. c + a / b
      4. a * b + c
 *
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

console.log("Enter 3 numbers to perform the arithmetic operations");
const num1 = prompt('Enter First Number: ');
const num2 = prompt('Enter Second Number: ');
const num3 = prompt('Enter Third Number: ');
console.log();

let result1 = Number(num1) + Number(num2) * Number(num3);
console.log("Arithmetic Operation: result1 = num1 + num2 * num3: " +result1);

let result2 = Number(num1) % Number(num2) + Number(num3);
console.log("Arithmetic Operation: result2 = num1 % num2 + num3: " +result2);

let result3 = Number(num3) + Number(num1) / Number(num2);
console.log("Arithmetic Operation: result3 = num3 + num1 / num2: " +result3);

let result4 = Number(num1) * Number(num2) + Number(num3);
console.log("Arithmetic Operation: result4 = num1 * num2 + num3: " +result4);

console.log();

if ( ( result1 > result2 ) && ( result1 > result3 ) && ( result1 > result4 ) ) {
    console.log(result1 + " is the maximum result.");
}
else if ( ( result2 > result1 ) &&  (result2 > result3 ) && ( result2 > result4 ) ) {
    console.log(result2 + " is the maximum result.");
}
else if ( ( result3 > result1 ) && ( result3 > result2 ) && ( result3 > result4 ) ) {
    console.log(result3 + " is the maximum result.");
}
else {
    console.log(result4 + " is the maximum result.");
}

if ( ( result1 < result2 ) && ( result1 < result3 ) && ( result1 < result4 ) ) {
    console.log(result1 +" is the minimum result.");
}
else if ( ( result2 < result1 ) && ( result2 < result3 ) && ( result2 < result4 ) ) {
    console.log(result2 +" is the minimum result.");
}
else if ( ( result3 < result1 ) && ( result3 < result2 ) && ( result3 < result4 ) ) {
    console.log(result3 +" is the minimum result.");
}
else {
    console.log(result4 +" is the minimum result.");
}

