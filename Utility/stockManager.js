var fs = require('fs');
/**
 * @description  variable is declared to use to acquire Utility class
 * @var {input} Utility
 */
var Utility = require("../utility");
/**
 * @description  variable is declared to used to readfilesync
 * @var {input} obj
 */
var obj = fs.readFileSync("company.json");
/**
 * @description  variable is declared to used to readfilesync
 * @var {input} obj1
 */
var obj1 = fs.readFileSync("user.json");
/**
 * @description  variable is declared to used to parse json file
 * @var {obj} company
 */
var company = JSON.parse(obj);
/**
 * @description  variable is declared to use to acquire Utility class
 * @var {obj1} user
 */
var totalprice = 0;
var user = JSON.parse(obj1);
//create stockAccount
var stockAccount = /** @class */ (function () {
    function stockAccount() {
        //sell the shares of user
        this.sell = function () {
            console.log(company);
            console.log(user);
            console.log("Enter the name of stocks");
            var company_name = Utility.inputString();
            console.log("Enter the number of stocks");
            var shares = Utility.inputInt();
            for (var i = 0; i < user.stocks.length; i++) {
                if (user.stocks[i].company_name == company_name && user.stocks[i].shares > shares) {
                    var quantity = shares;
                    user.stocks[i].shares = user.stocks[i].shares - quantity;
                }
            }
            for (var i = 0; i < company.shares.length; i++) {
                if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                    var quantity = shares;
                    company.shares[i].shares = company.shares[i].shares + quantity;
                }
            }
        };
    }
    //calculate value of sock
    stockAccount.prototype.valueof = function () {
        console.log(user);
        for (var i = 0; i < user.stocks.length; i++) {
            totalprice += user.stocks[i].shares;
        }
        console.log(totalprice);
    };
    //buy the shares of company
    stockAccount.prototype.buy = function () {
        console.log(user);
        console.log(company);
        console.log("Enter the name of shares");
        var company_name = Utility.inputString();
        if (!company_name == true) {
            return;
        }
        console.log("Enter the number of shares");
        var shares = Utility.inputInt();
        for (var i = 0; i < company.shares.length; i++) {
            if (company.shares[i].company_name == company_name && company.shares[i].shares > shares) {
                var quantity = shares;
                company.shares[i].shares = company.shares[i].shares - quantity;
                var price = company.shares[i].price;
                user.stocks.push({ company_name: company_name, shares: shares, price: price });
            }
        }
    };
    //save the shares of user
    stockAccount.prototype.save = function () {
        fs.writeFileSync("user.json", JSON.stringify(user));
        fs.writeFileSync("company.json", JSON.stringify(company));
        console.log("file is created");
    };
    //print the shares of users and company
    stockAccount.prototype.print = function () {
        console.log(user);
        console.log(company);
    };
    return stockAccount;
}());
module.exports = {
    stockAccount: stockAccount
};
