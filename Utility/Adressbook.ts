const fs = require("fs");
export {};
var util = require("../utility");
var readline = util.input();
var list = fs.readFileSync("addressbook.json");
let namePattern: RegExp = /^[a-z A-Z]{1,15}$/;
let addressPattern: RegExp = /^[a-z A-Z]{1,40}$/;
let zipPattern: RegExp = /^[0-9]{6}$/;
let numberPattern: RegExp = /^\d{10}$/;

var object = JSON.parse(list);

interface one {
    firstname:string;
    lastName:string;
    address:string;}

    interface second extends one {
    city:string;
    state:string;
    zip:number;
    phone:number;
}
class Address implements second {
    firstname:string;
    lastName:string;
    address:string;
    city:string;
    state:string;
    zip:number;
    phone:number;
    constructor() {

    }

    create() {
        console.log(object);
        console.log("Enter first name(Max. 15 characters):");
        let firstName: string = util.inputString();
        if (namePattern.test(firstName) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter last name(Max. 15 characters):");
        let lastName: string = util.inputString();
        if (namePattern.test(lastName) == false) {
            console.log("Enter character properly");
            return;
        }

        for (let i = 0; i < object.list.length; i++) {
            let name: string = object.list[i].firstName.toLowerCase();
            let last_name: string = object.list[i].lastName.toLowerCase();
            if (name == firstName)
                if (lastName == last_name) {
                    console.log("Entered name already present.");
                    return;
                }
        }
        console.log("Enter address(Max. 40 characters):");
        let address: string =  util.inputString();
        console.log(address);
        if (addressPattern.test(address) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter City(Max. 30 characters):");
        let city: string = util.inputString();
        if (namePattern.test(city) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter State(Max. 30 characters):");
        let state: string = util.inputString();
        if (namePattern.test(state) == false) {
            console.log("Enter character properly");
            return;
        }

        console.log("Enter Zip(Should be 6 digits):");
        let zip: number = util.inputInt();
        if (zipPattern.test('zip') == true) {
            console.log("Enter character properly");
            return;
        }

        console.log("Enter Phone(Min. 10 digits):");
        let phone: number = util.inputInt();
        if (numberPattern.test('phone') == true) {
            console.log("Enter character properly");
            return;
        }
        object.list.push({ firstName, lastName, address, city, state, zip, phone });
        console.log("Record created");
 
        var sortList = object.list.sort((a,b) => {
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
                return 1;
            else if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
                return -1;
            else
                return 0;
        });
        fs.writeFileSync("addressbook.json", JSON.stringify(object));
        console.log(sortList);
    }

    view() {
        console.log(object);
        console.log("Enter the first name of Profile which you want to view");
        let name = util.inputString(), viewed = false;
        for (let i = 0; i < object.list.length; i++) {
            if (name == object.list[i].firstName) {
                console.log(object.list[i]);
                viewed = true;
                break;
            }
        }

        if (!viewed)
            console.log("Profile not found. Please create the profile.")
    }

    update() {
        console.log(object);
        console.log("Enter the first name of Profile which you want to update");
        let name = util.inputString();
        for (let i = 0; i < object.list.length; i++) {
            if (name == object.list[i].firstName) {
                console.log("Choose the detail you want to update:");
                console.log("1.Address\n2.City\n3.State\n4.Zip Code\n5.Phone\n6.Main Menu");
                let choice: number = util.input();
                switch (choice) {
                    case 1:
                        console.log("Enter the address");
                        let address: string = util.inputString();
                        if (addressPattern.test(address) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].address = address;
                        console.log(object.list[i]);
                        break;
                    case 2:
                        console.log("Enter the city");
                        let city: string = util.inputString();
                        if (namePattern.test(city) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].city = city;
                        console.log(object.list[i]);
                        break;
                    case 3:
                        console.log("Enter the state");
                        let state: string = util.inputString();
                        if (namePattern.test(state) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].state = state;
                        console.log(object.list[i]);
                        break;
                    case 4:
                        console.log("Enter the zip code");
                        let zip: number = util.inputInt();
                        if (zipPattern.test('zip') == true) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].zip = zip;
                        console.log(object.list[i]);
                        break;
                    case 5:
                        console.log("Enter the phone number");
                        let phone: number = util.inputInt();
                        if (numberPattern.test('phone') == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].phone = phone;
                        console.log(object.list[i]);
                        break;
                    case 6:
                        return false;
                    default:
                        console.log("Entered wrong choice");
                        break;
                }

            }
            else {
                console.log("no name available");
            }
        }
        fs.writeFileSync("addressbook.json", JSON.stringify(object));
    }

    delete() {
        console.log(object.list);
        console.log("Enter the first name of Profile which you want to delete");
        let name: string = util.inputString();
        for (let i = 0; i < object.list.length; i++) {
            if (object.list[i].firstName == name) {
                delete object.list[i];
                console.log("Profile has been deleted");
                object.list = object.list.filter((el) => {
                    return el != null;
                });
                fs.writeFileSync("addressbook.json", JSON.stringify(object));
                return;
            }
        }
        console.log("Profile not found");
    }
}
module.exports = {
    Address

}