
/********************************************************************************************
*Execution    :  default node     cmd> node stockReport.js.
*
*Purpose      :  to manage the stocks and calculate total price.
*
*@description  
*
*@file        : stockReport.js.
*@overview    : stockAccount class to manage the stocks and calculate total price.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
export {};
/** 
 * @description  variable is declared to use to acquire stock class
 * @var {input} src
 */
var src=require("./Utility/oops/stockManager");
/** 
 * @description  variable is declared to use to acquire stock class
 * @var {input} stock
 */
var stock = new src.stockAccount();
stock.stockcalculator();



