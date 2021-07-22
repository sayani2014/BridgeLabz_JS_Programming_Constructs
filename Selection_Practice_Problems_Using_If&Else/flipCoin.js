/**
 * Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const randomNumber = Math.floor( Math.random() * 2 ) + 1;

if ( randomNumber == 1 ) {
    console.log("Its a HEAD!");
}
else {
    console.log("Its a TAIL!");
}
