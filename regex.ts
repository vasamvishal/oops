
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

// /** 
//  * @description  variable is declared to use to acquire input function
//  * @const {input} readline
//  */


// interface LabeledValue {
//   label: string;
// }

// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

export ={};
var readline=Utility.input();
let fullNamePattern:RegExp= /^[a-z A-Z]{1,40}$/;
let numberPattern:RegExp= /^\d{10}$/;
let datePattern:RegExp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
let testregex:RegExp= /^[a-zA-z]{10}$/;
 
//  function sealed(target) {
//    console.log("abc");
// }
   // @sealed
  class def {
   
constructor(){}

 regex=()=>{

   let string = `Hello <<name>>, we have your full name as <<full name>> in our system. 
    Your contact number is 91­xxxxxxxxxx.Please let us know in case of any clarification.
    Thank you BridgeLabz,01/01/2016.`

  
   console.log("enter the name ");
   
   let name:string= Utility.inputString();
   if (testregex.test(name) == true ) {
      console.log("enter again");
      
   }
   console.log("enter full name");
   
   let full_name:string = Utility.inputString();
   if (fullNamePattern.test(full_name) == false) {
      console.log("enter again");
   }
   console.log("enter the phone_number");
   
   let number:string= Utility.inputInt();
   if (numberPattern.test(number) == false) {
      console.log("enter again");
   }
   
   let date = readline.question("enter the date");
   if (date == null || date == undefined || datePattern.test(date) == false) {
      console.log("enter again");  
   }
   var result = string.replace("<<name>>", name).replace("<<full name>>", full_name).replace("91­xxxxxxxxxx", number).replace("01/01/2016", date);
   console.log(result);
  }
}
let Abc=new def();
Abc.regex();





