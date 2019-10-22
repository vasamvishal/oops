/********************************************************************************************
*Execution    :  default node     cmd> node Clinique.js.
*
*Purpose      :  to maintain the adress book
*
*@description
*
*@file        : AdressBook.js.
*@overview    : Address module to maintain the adress book
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/**
 * @description  variable is declared to use to acquire Utility class
 * @var {input} Utility
 */
var Utility = require("../Utility/utility");
// export {};
var fs = require("fs");
/**
 * @description  variable is declared to use to acquire input function
 * @const {input} readline
 */
var readline = Utility.input();
/**
 * @description  variable is declared to used to readfilesync
 * @var {input} obj
 */
var obj = fs.readFileSync("clinique.json");
/**
 * @description  variable is declared to used to parse json file
 * @var {obj} object
 */
var object = JSON.parse(obj);
/**
 * @description  variable is declared to use to acquire Clinique class
 * @var {input} src
 */
var src = require("../Utility/oops/clinique");
/**
 * @description  variable is declared to use to acquire Clinique class
 * @var {input} clinique
 */
var clinique = new src.clinique();
var j = 0;
//for doctor and patient 
while (j == 0) {
    console.log("Enter the choice");
    console.log("Enter 1 for Doctors");
    console.log("Enter 2 for Patient");
    console.log("Enter 3 for Appointment");
    console.log("Enter 4 for Exit");
    var choice = Utility.inputInt();
    switch (choice) {
        case 1:
            clinique.searchdoctor();
            break;
        case 2:
            clinique.searchpatient();
            break;
        case 3:
            clinique.appointment();
            break;
        case 4:
            j++;
            break;
        default: break;
    }
}
