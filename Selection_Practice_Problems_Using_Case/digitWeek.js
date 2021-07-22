/**
 * Read a Number and Display the week day (Sunday, Monday,...)
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

 const prompt = require('prompt-sync')();

 const number = prompt('Enter a number between 1 to 7 to display the week day: ');
 
 switch(Number(number)) {
     case 1:
         console.log("Sunday");
         break;
     case 2:
         console.log("Monday");
         break;
     case 3:
         console.log("Tuesday");
         break;
     case 4:
         console.log("Wednesday");
         break;
     case 5:
         console.log("Thursday");
         break;
     case 6:
         console.log("Friday");
         break;
     case 7:
         console.log("Saturday");
         break;
     default:
         console.log("Wrong input! There are only 7 days in a week.");
         break;
 }
 