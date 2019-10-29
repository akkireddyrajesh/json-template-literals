const djson = require('.');

const sample = {

    "101": {
        "name": "Welcome Message",
        "data": [
            "i am trying to display current time using json-templae-literals is _now 01",
            "i am trying to display current time using json-templae-literals is _now 02",
        ]
    },
    "common": {
        "sign": "Thank you for Supporting Us,_sign"
    },
};

//Test Cases

//Test.01:
let test01 = djson.dynamicJSON({
    json: sample
});
console.log(`test01 res is ${JSON.stringify(test01)}`);

//Test.02:
let test02 = djson.dynamicJSON({
    json: sample,
    variablesObj: { "_sign": "Team TechYodha", "_now": Date.now() }
});
console.log(`test02 res is ${JSON.stringify(test02)}`);