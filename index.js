let strReplace = (host, trgt) => {
    return str.replace(host, trgt);
}

module.exports.dynamicJSON = (parmsObj) => {
    let smaple_parmsObj = {
        json: { "key": "hi this fname lname" },
        variablesObj: { "fname": "rajesh", "lname": "kumar" }
    };

    let result = {};

    if (!parmsObj || !parmsObj.json || !parmsObj.variablesObj) {
        console.log(`[err] @ dynamicJSON() is invalid Parameters required (1)json and (2)variables`);
        return null;
    }

    //Converting JSON to string
    let jsonStr = JSON.stringify(parmsObj.json);

    //string replace function
    let re = new RegExp(Object.keys(parmsObj.variablesObj).join("|"), "gi");

    let dynamicStr = jsonStr.replace(re, function(matched) {
        return parmsObj.variablesObj[matched];
    });


    result = dynamicStr;


    return result;

};