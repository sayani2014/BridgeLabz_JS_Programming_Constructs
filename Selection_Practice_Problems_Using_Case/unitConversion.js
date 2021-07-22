/**
 * Write a program that takes User Inputs and does Unit Conversion of different Length units
    1. Feet to Inch 
    2. Feet to Meter
    3. Inch to Feet
    4. Meter to Feet

 * @author: SAYANI KOLEY
 * @since: 21.07.2021   
 */

const prompt = require('prompt-sync')();

const digit = prompt("Enter the number for the unit conversion: ");
const number = prompt('Enter 1. Feet to Inch ' +
                            '2. Feet to Meter ' +
                            '3. Inch to Feet ' +
                            '4. Meter to Feet option: ');

switch(Number(number)) {
    case 1: 
        let feet_to_inch = Number(digit) * 12;
        console.log("Feet to Inch: " +feet_to_inch);
        break;
    case 2: 
        let feet_to_meter = Number(digit) / 3.281;
        console.log("Feet to Meter: " +feet_to_meter);
        break;
    case 3: 
        let inch_to_feet = Number(digit) / 12;
        console.log("Inch to Feet: " +inch_to_feet);
        break;
    case 4: 
        let meter_to_feet = Number(digit) * 3.281;
        console.log("Meter to Feet: " +meter_to_feet);
        break;
    default:
        console.log("You have entered the wrong option!");
        break;
}                           
                            
                        