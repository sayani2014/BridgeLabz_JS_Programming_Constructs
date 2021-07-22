/**
 * Unit Conversion
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

/**
 * 1ft = 12 in then 42 in = ? ft
 * prompt() is used to take user input from console.
 */

function inchToFeet() {
    const num1 = prompt('Enter a number in inch: ');
    let converted_number = Number(num1) / 12;

    console.log("Converted number in feet is: " +converted_number);
}

/**
 * Rectangular Plot of 60 feet x 40 feet in meters
 * prompt() is used to take user input from console.
 */

function feetToMeters() {
    const length = prompt('Enter the length in feet: ');
    let converted_length = Number(length) / 3.8;

    const breadth = prompt('Enter the breadth in feet: ');
    let converted_breadth = Number(breadth) / 3.8;

    console.log("Converted length and breadth in meters is: " +converted_length+ " * " +converted_breadth);
}

/**
 * Calculate area of 25 such plots in acres
 * prompt() is used to take user input from console.
 */

function area() {
    const length = prompt('Enter the length in feet: ');
    const breadth = prompt('Enter the breadth in feet: ');
    
    let calculate_area = length * breadth;
    console.log("Area of 1 plot in feet is: " +calculate_area);

    let calculate_area_in_acres = calculate_area / 43560;
    console.log("Area of 1 plot in acres is: " +calculate_area_in_acres);

    let total_area = calculate_area_in_acres * 25;
    console.log("Area of 25 such plots in acres is: " +total_area);
}

/**
 * Call the functions for execution
 */

inchToFeet();
console.log();

feetToMeters();
console.log();

area();