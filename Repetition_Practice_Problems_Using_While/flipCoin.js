/**
 * Extend the Flip Coin problem till either Heads or Tails wins 11 times.
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

let MAXCOUNT = 11;
let countHead = 1;
let countTail = 1;
let i = 1;
let j = 1;

while( (i <= MAXCOUNT) && (j <= MAXCOUNT)) {
    let randomNumber = Math.floor ( Math.random() * 2 );

    if ( randomNumber == 0 ) { 
        console.log("Heads");
        while ( countHead <= MAXCOUNT ) {   
            i++;    
            countHead++;
            break;
        }
    }
    else {
        console.log("Tails");
        while ( countTail <= MAXCOUNT ) {
            j++;
            countTail++;
            break;
        }
    }
}


