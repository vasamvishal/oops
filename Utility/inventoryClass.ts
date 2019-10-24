const Utility = require("../../Utility/utility")
const readline = Utility.input();
export {};
class Inventory {
    constructor()
    {}
    inventory1 = () => {
      var fs = require('fs');
      
      var obj = fs.readFileSync("./inventory.json");

      var object = JSON.parse(obj);
      console.log(object);
      console.log("||Enter into Inventory||");
      console.log("||Enter the options||");
      console.log("1 for Addition into inventory");
      console.log("2 for deletion of inventory");
      let choice:number= parseInt(readline.question("Enter the option "));
      var validationRule = /^\s{1,}$/;
      if (choice == undefined || choice == null || isNaN(choice) || validationRule.test('choice') == true) {
        console.log("Value is undefined");
        return false;
      }
  
      switch (choice) {
        case 1: console.log("enter the options given down");
          console.log("enter 1 for rice");
          console.log("enter 2 for wheat");
          console.log("enter 3 for pulses");
          let choice1:number= parseInt(readline.question("Enter the option "));
          if (choice1 == undefined || choice1 == null || isNaN(choice1) || validationRule.test('choice1') == true) {
            console.log("Value is undefined");
            return false;
          }
          switch (choice1) {
            case 1:
              var name:string = readline.question("Enter the name of rice product to add");
              if (name == undefined || name == null  || validationRule.test(name) == true) {
                console.log("Value is undefined");
                return false;
              }
              var weight:number = parseInt(readline.question(`Enter the weight of ${name}`));
              if (weight == undefined || weight == null || isNaN(weight) || validationRule.test('weight') == true) {
                console.log("Value is undefined");
                return false;
              }
              var price:number = parseInt(readline.question(`Enter the price of ${name}`));
              if (price == undefined || price == null || isNaN(price) || validationRule.test('price') == true) {
                console.log("Value is undefined");
                return false;
              }
              object.rice.push({ name, weight, price });
              console.log(object);
              break;
  
  
            case 2: var name:string = readline.question("Enter the name of wheat product you want to add");
              if (name == undefined || name == null || validationRule.test(name) == true) {
                console.log("Value is undefined");
                return false;
              }
              var weight:number = parseInt(readline.question(`Enter the weight of ${name}`));
              if (weight == undefined || weight == null || isNaN(weight) || validationRule.test('weight') == true) {
                console.log("Value is undefined");
                return false;
              }
              var price:number= parseInt(readline.question(`Enter the price of ${name}`));
              if (price == undefined || price == null || isNaN(price) || validationRule.test('price') == true) {
                console.log("Value is undefined");
                return false;
              }
              object.wheat.push({ name, weight, price });
              console.log(object);
              break;
  
            case 3: var name:string= readline.question("Enter the name of wheat product you want to add");
              if (name == undefined || name == null  || validationRule.test(name) == true) {
                console.log("Value is undefined");
                return false;
              }
              var weight:number = parseInt(readline.question(`Enter the weight of ${name}`));
              if (weight == undefined || weight == null || isNaN(weight) || validationRule.test('weight') == true) {
                console.log("Value is undefined");
                return false;
              }
              var price:number= parseInt(readline.question(`Enter the price of ${name}`));
              if (price == undefined || price == null || isNaN(price) || validationRule.test('price') == true) {
                console.log("Value is undefined");
                return false;
              }
              object.pulses.push({ name, weight, price });
              console.log(object);
              break;
  
            default: console.log("wrong options");
              return;
  
          }
          break;
  
        case 2:
          console.log("enter the options given down to delete");
          console.log("enter 1 for rice");
          console.log("enter 2 for wheat");
          console.log("enter 3 for pulses");
          var choice2:number= parseInt(readline.question("Enter the option "));
          if (choice2 == undefined || choice2 == null || isNaN(choice2) || validationRule.test('choice2') == true) {
            console.log("Value is undefined");
            return false;
          }
          switch (choice2) {
            case 1:
              var name:string = readline.question("Enter the name of rice product to delete");
              if (name == undefined || name == null  || validationRule.test(name) == true) {
                console.log("Value is undefined");
                return false;
              }
  
              for (let i = 0; i < object.rice.length; i++) {
  
                if (object.rice[i].name == name) {
                  delete object.rice[i];
                }
              }
              console.log(object);
              break;
  
  
            case 2: var name:string = readline.question("Enter the name of wheat product you want to delete");
              if (name == undefined || name == null|| validationRule.test(name) == true) {
                console.log("Value is undefined");
                return false;
              }
  
              for (let i = 0; i < object.wheat.length; i++) {
  
                if (object.wheat[i].name == name) {
                  delete object.wheat[i];
                }
              }
              console.log(object);
              break;
            case 3: var name:string = readline.question("Enter the name of pulses product you want to delete");
              if (name == undefined || name == null|| validationRule.test(name) == true) {
                console.log("Value is undefined");
                return false;
              }
              for (let i = 0; i < object.wheat.length; i++) {
  
                if (object.pulses[i].name == name) {
                  delete object.pulses[i];
  
                }
              }
              console.log(object);
              break;
  
            default: console.log("wrong options");
              return;
  
          }
      }
      fs.writeFileSync("inventory2.json", JSON.stringify(object));
    }
    }
  
  module.exports={
    Inventory
  }