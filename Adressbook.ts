/********************************************************************************************
*Execution    :  default node     cmd> node AdressBook.js.
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
//export {};
var util = require("./Utility/utility");
/** 
 * @description  variable is declared to use to acquire stockAccount class
 * @var {input} src
 */
var src = require("./Utility/oops/Adressbook");
/** 
 * @description  variable is declared to use to acquire Adress class
 * @var {input} adress
 */
var address = new src.Address(),
    i = 0;
//switch case
while (i == 0) {
    console.log("WELCOME TO ADDRESS BOOK PROGRAM");
    console.log("1.Create Address\n2.View Address\n3.Update Address Details\n4.Delete Address\n5.Exit");
    let choice = util.inputInt();

    switch (choice) {
        case 1:
            address.create();
            break;
        case 2:
            address.view();
            break;
        case 3:
            address.update();
            break;
        case 4:
            address.delete();
            break;
        case 5:
            i++;
            break;
        default:
            console.log("Incorrect choice.")
            break;
    }
}