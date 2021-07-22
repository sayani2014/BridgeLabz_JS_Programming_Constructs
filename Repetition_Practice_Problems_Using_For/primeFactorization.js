/**
 * Write a program to compute Factors of a number N using prime factorization method.
    Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
    O/P -> Print the prime factors of number N.
 *
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter any number to print its prime factors: '));
let isPrime = 0;

for ( i = 2; i <= number; i++ ) {
    let a = number % i;
    if ( a == 0 ) {
        isPrime = 1;
        for ( j = 2; j <= i / 2; j++ ) {
            let b = i % j;
            if ( b == 0) {
                isPrime = 0;
            }
        }
        if ( isPrime == 1 ) {
            console.log(i);
        }
    }
}
