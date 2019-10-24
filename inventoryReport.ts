 
/********************************************************************************************
*Execution    :  default node     cmd> node inventoryReport.js.
*
*Purpose      :  to maintain the inventory report
*
*@description  
*
*@file        : inventoryReport.js.
*@overview    : inventory module to maintain the inventory report.
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
//Hoisting example in javascript
/** 
 * @description  variable is declared to use to require the file System
 * @const {text} fs
 */
export {};
fs = require('fs');
 var fs;
 /** 
 * @description  variable is declared to use to acquire Utility class
 * @var {input} Utility
 */

var src= require("./Utility/oops/inventoryReport");
/** 
 * @description  variable is declared to use to acquire inventory class
 * @var {input} Utility
 */
var address=new src.inventoryreport();
address.inventory();




