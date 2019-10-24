/********************************************************************************************
*Execution    :  default node     cmd> node stockManager.js.
*
*Purpose      :  to manage the stocks
*
*@description
*
*@file        : stockManager.js.
*@overview    : stockAccount class to manage all the stocks and shares.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
/**
 * @description  variable is declared to use to acquire Utility class
 * @var {input} Utility
 */
var Utility = require("./Utility/utility");
/**
 * @description  variable is declared to use to acquire stockAccount class
 * @var {input} src
 */
var src = require("./Utility/oops/stockManager");
var i = 0;
/**
 * @description  variable is declared to use to acquire stockAccount class
 * @var {input} stock
 */
var stock = new src.stockAccount();
//for printing and asking stock report
while (i == 0) {
    console.log("Stock Report");
    console.log("enter 1 for value of each shares");
    console.log("enter 2 for buy the shares");
    console.log("enter 3 for sell the stock");
    console.log("enter 4 for saving the stocks");
    console.log("enter 5 for printing the stock");
    console.log("enter 6 for exit");
    console.log("enter the options given above");
    var choice = Utility.inputInt();
    switch (choice) {
        case 1:
            stock.valueof();
            break;
        case 2:
            stock.buy();
            break;
        case 3:
            stock.sell();
            break;
        case 4:
            stock.save();
            break;
        case 5:
            stock.print();
            break;
        case 6:
            i++;
            console.log("Exit");
            break;
        default:
            console.log("wrong input");
            break;
    }
}
