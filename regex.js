"use strict";
/********************************************************************************************
*Execution    :  default node     cmd> node regex.js.
*
*Purpose      :  to understand regular expression
*
*@description
*
*@file        : regex.js.
*@overview    : regex module to replace a value and test an regular expression on it.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var Utility = require("./Utility/utility");
var readline = Utility.input();
var fullNamePattern = /^[a-z A-Z]{1,40}$/;
var numberPattern = /^\d{10}$/;
var datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
var testregex = /^[a-zA-z]{10}$/;
//  function sealed(target) {
//    console.log("abc");
// }
// @sealed
var def = /** @class */ (function () {
    function def() {
        this.regex = function () {
            var string = "Hello <<name>>, we have your full name as <<full name>> in our system. \n    Your contact number is 91\u00ADxxxxxxxxxx.Please let us know in case of any clarification.\n    Thank you BridgeLabz,01/01/2016.";
            console.log("enter the name ");
            var name = Utility.inputString();
            if (testregex.test(name) == true) {
                console.log("enter again");
            }
            console.log("enter full name");
            var full_name = Utility.inputString();
            if (fullNamePattern.test(full_name) == false) {
                console.log("enter again");
            }
            console.log("enter the phone_number");
            var number = Utility.inputInt();
            if (numberPattern.test(number) == false) {
                console.log("enter again");
            }
            var date = readline.question("enter the date");
            if (date == null || date == undefined || datePattern.test(date) == false) {
                console.log("enter again");
            }
            var result = string.replace("<<name>>", name).replace("<<full name>>", full_name).replace("91­xxxxxxxxxx", number).replace("01/01/2016", date);
            console.log(result);
        };
    }
    return def;
}());
var Abc = new def();
Abc.regex();
module.exports = {};
