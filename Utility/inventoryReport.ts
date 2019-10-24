

class inventoryreport{
    constructor()
{}
inventory = () => {
    var fs = require('fs');
    var object = fs.readFileSync("./inventory2.json");
    var obj = JSON.parse(object);
    var Utility1 = require("../utility");
    var readline = Utility1.input();
    console.log(obj);
    console.log("inventory example");
    console.log("enter the options given down");
    console.log("enter 1 for rice");
    console.log("enter 2 for wheat");
    console.log("enter 3 for pulses");
    let choice:number = parseInt(readline.question("enter the option "));
    let validationRule = /^\s{1,}$/;
    if (choice == undefined || choice == null || isNaN(choice) || validationRule.test('choice') == true) {
        console.log("Value is undefined");
        return false;
    }
    switch (choice) {
        case 1: console.log("||enter the type of rice||");
            console.log("*enter basmati");
            console.log("*enter madhur");
            console.log("*enter gokul");
            let choice1:string= (readline.question("||enter the rice name|| "));

            if (choice1 == undefined  || validationRule.test(choice1) == true) {
                console.log("Value is undefined");
                return false;
            }
            for (let i = 0; i < obj.rice.length; i++) {
                if (obj.rice[i].name == choice1) {
                    const weight:number = parseInt(readline.question("||enter the weight of rice in kgs||"));
                    if (weight == undefined || isNaN(weight) || validationRule.test('weight') == true) {
                        console.log("Value is undefined");
                        return false;
                    }
                    const totalprice:number= obj.rice[i].price * weight;
                    console.log(`totalprice of ${obj.rice[i].name} rice of ${weight} is ${totalprice}`);
                }
            }
            break;

        case 2: console.log("enter the type of wheat");
            console.log("||enter any options||");
            console.log("*enter  gold");
            console.log("*enter  silvercoin");
            console.log("*enter  brownwheat");
            let choice2 :string= readline.question("||enter the wheat name||");
            if (choice2 == undefined  || validationRule.test(choice2) == true) {
                console.log("Value is undefined");
                return false;
            }
            for (let i = 0; i < obj.wheat.length; i++) {
                if (obj.wheat[i].name == choice2) {
                    const weight:number = parseInt(readline.question("||enter the weight of wheat in kgs||"));
                    if (weight == undefined || isNaN(weight)) {
                        console.log("Value is undefined");
                        return false;
                    }
                    const totalprice:number = obj.wheat[i].price * weight;
                    console.log(`totalprice of ${obj.wheat[i].name} wheat of ${weight}is ${totalprice}`);
                }
            }
            break;


        case 3: console.log("enter the type of pulses");
            console.log("enter any options");
            console.log("enter  dal");
            console.log("enter lentils");
            console.log("enter  peas");
            let choice3:string= readline.question("||enter the type of pulse ||");
            if (choice3 == undefined || validationRule.test(choice3) == true) {
                console.log("Value is undefined");
                return false;
            }
            for (let i = 0; i < obj.pulses.length; i++) {
                if (obj.pulses[i].name == choice3) {
                    const weight :number= parseInt(readline.question("||enter the weight of pulses in kgs||"));
                    if (weight == undefined || isNaN(weight) || validationRule.test('weight') == true) {
                        console.log("Value is undefined");
                        return false;
                    }
                    const totalprice:number = obj.rice[i].price * weight;
                    console.log(`totalprice of ${obj.pulses[i].name} pulses of ${weight} is ${totalprice}`);
                }
            }
            break;

        default:
            console.log("wrong input");
            return;


    }

}
}

module.exports = {
    inventoryreport
}
