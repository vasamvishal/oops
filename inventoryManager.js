/********************************************************************************************
*Execution    :  default node     cmd> node inventoryManager.js.
*
*Purpose      :  to maintain the inventory
*
*@description
*
*@file        : inventoryManager.js.
*@overview    : inventory module to maintain the inventory
                 
*@author	 :  Vishal Vasam <vasamvishal12@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var src = require("./Utility/oops/inventoryClass");
/**
 * @description  variable is declared to use to acquire stockAccount class
 * @var {input} iinventory
 */
var iinventory = new src.Inventory();
/**
 * @description  variable is declared to use to acquire inventory1 class
 * @var {input} iinventory
 */
iinventory.inventory1();
