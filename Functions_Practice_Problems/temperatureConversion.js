/**
 * Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point
   (0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
    a. degF = (degC * 9/5) + 32
    b. degC = (degF – 32) * 5/9
 * 
 * @author: SAYANI KOLEY
 * @since: 21.07.2021
 */

const prompt = require('prompt-sync')();

function convert_CelsiustoFahreinheit(celsius) {
    degF = (9/5) * celsius + 32;
    console.log("Celsius to Fahreinheit conversion value is: " +degF);
}

function convert_FahreinheittoCelsius(fahreinheit) {
    degC = ( fahreinheit - 32 ) * ( 5 / 9 );
    console.log("Fahreinheit to Celsius conversion value is: " +degC);
}


let option = parseInt(prompt("Enter option: 1. Celsius to Fahreinheit 2. Fahreinheit to Celsius : "));
switch(option) {
    case 1:
        let celsius = parseFloat(prompt('Enter the temperature range within 0*C to 100*C: '));
        if ( celsius >= 0 && celsius <= 100 ) {
            convert_CelsiustoFahreinheit(celsius);
        }       
        else {
            console.log("Temperature range extended!");
        }
        break;
    case 2:
        let fahreinheit = parseFloat(prompt('Enter the temperature range within 32*F to 212*F: '));
        if ( fahreinheit >= 32 && fahreinheit <= 212 ) {
            convert_FahreinheittoCelsius(fahreinheit);
        }       
        else {
            console.log("Temperature range extended!");
        }
        break;
    default:
        console.log("Wrong option!");
        break;
}


