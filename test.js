const djson = require('.');
let djsonObj = djson.dynamicJSON({
    json: { "name": "fname", "initial": "lname", "empId": "_empId" },
    variablesObj: { "fname": "rajesh", "lname": "kumar", "_empId": "23" }
});
console.log(`${djsonObj}`);