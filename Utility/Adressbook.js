"use strict";
exports.__esModule = true;
var fs = require("fs");
var util = require("../utility");
var readline = util.input();
var list = fs.readFileSync("addressbook.json");
var namePattern = /^[a-z A-Z]{1,15}$/;
var addressPattern = /^[a-z A-Z]{1,40}$/;
var zipPattern = /^[0-9]{6}$/;
var numberPattern = /^\d{10}$/;
var object = JSON.parse(list);
var Address = /** @class */ (function () {
    function Address() {
    }
    Address.prototype.create = function () {
        console.log(object);
        console.log("Enter first name(Max. 15 characters):");
        var firstName = util.inputString();
        if (namePattern.test(firstName) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter last name(Max. 15 characters):");
        var lastName = util.inputString();
        if (namePattern.test(lastName) == false) {
            console.log("Enter character properly");
            return;
        }
        for (var i = 0; i < object.list.length; i++) {
            var name_1 = object.list[i].firstName.toLowerCase();
            var last_name = object.list[i].lastName.toLowerCase();
            if (name_1 == firstName)
                if (lastName == last_name) {
                    console.log("Entered name already present.");
                    return;
                }
        }
        console.log("Enter address(Max. 40 characters):");
        var address = util.inputString();
        console.log(address);
        if (addressPattern.test(address) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter City(Max. 30 characters):");
        var city = util.inputString();
        if (namePattern.test(city) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter State(Max. 30 characters):");
        var state = util.inputString();
        if (namePattern.test(state) == false) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter Zip(Should be 6 digits):");
        var zip = util.inputInt();
        if (zipPattern.test('zip') == true) {
            console.log("Enter character properly");
            return;
        }
        console.log("Enter Phone(Min. 10 digits):");
        var phone = util.inputInt();
        if (numberPattern.test('phone') == true) {
            console.log("Enter character properly");
            return;
        }
        object.list.push({ firstName: firstName, lastName: lastName, address: address, city: city, state: state, zip: zip, phone: phone });
        console.log("Record created");
        var sortList = object.list.sort(function (a, b) {
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
                return 1;
            else if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
                return -1;
            else
                return 0;
        });
        fs.writeFileSync("addressbook.json", JSON.stringify(object));
        console.log(sortList);
    };
    Address.prototype.view = function () {
        console.log(object);
        console.log("Enter the first name of Profile which you want to view");
        var name = util.inputString(), viewed = false;
        for (var i = 0; i < object.list.length; i++) {
            if (name == object.list[i].firstName) {
                console.log(object.list[i]);
                viewed = true;
                break;
            }
        }
        if (!viewed)
            console.log("Profile not found. Please create the profile.");
    };
    Address.prototype.update = function () {
        console.log(object);
        console.log("Enter the first name of Profile which you want to update");
        var name = util.inputString();
        for (var i = 0; i < object.list.length; i++) {
            if (name == object.list[i].firstName) {
                console.log("Choose the detail you want to update:");
                console.log("1.Address\n2.City\n3.State\n4.Zip Code\n5.Phone\n6.Main Menu");
                var choice = util.input();
                switch (choice) {
                    case 1:
                        console.log("Enter the address");
                        var address = util.inputString();
                        if (addressPattern.test(address) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].address = address;
                        console.log(object.list[i]);
                        break;
                    case 2:
                        console.log("Enter the city");
                        var city = util.inputString();
                        if (namePattern.test(city) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].city = city;
                        console.log(object.list[i]);
                        break;
                    case 3:
                        console.log("Enter the state");
                        var state = util.inputString();
                        if (namePattern.test(state) == false) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].state = state;
                        console.log(object.list[i]);
                        break;
                    case 4:
                        console.log("Enter the zip code");
                        var zip = util.inputInt();
                        if (zipPattern.test('zip') == true) {
                            console.log("Enter character properly");
                            return;
                        }
                        object.list[i].zip = zip;
                        console.log(object.list[i]);
                        break;
                    case 5:
                        console.log("Enter the phone number");
                        var phone = util.inputInt();
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
    };
    Address.prototype["delete"] = function () {
        console.log(object.list);
        console.log("Enter the first name of Profile which you want to delete");
        var name = util.inputString();
        for (var i = 0; i < object.list.length; i++) {
            if (object.list[i].firstName == name) {
                delete object.list[i];
                console.log("Profile has been deleted");
                object.list = object.list.filter(function (el) {
                    return el != null;
                });
                fs.writeFileSync("addressbook.json", JSON.stringify(object));
                return;
            }
        }
        console.log("Profile not found");
    };
    return Address;
}());
module.exports = {
    Address: Address
};
