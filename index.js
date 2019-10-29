let strReplace = (host, trgt) => {
    return str.replace(host, trgt);
}

let isEmptyObj = (obj) => {
    try {
        // because Object.keys(new Date()).length === 0;
        // we have to do some additional check
        return Object.keys(obj).length === 0 && obj.constructor === Object;
        //NOTE: if obj is empty fn returns true.   
    } catch (e01) {
        console.log(`[err] @ isEmptyObj() invalid parms type`, e01);
        return true;
    }

}

module.exports.dynamicJSON = (parmsObj) => {
    let smaple_parmsObj = {
        json: { "key": "hi this fname lname" },
        variablesObj: { "fname": "rajesh", "lname": "kumar" }
    };

    let result = {};

    //params check
    if (!parmsObj || isEmptyObj(parmsObj.json)) {
        console.log(`[err] @ dynamicJSON() is invalid Parameters required (1)json and (2)variables`);
        return null;
    }

    //if variables Object is empty then we will return the same JSON.
    if (!parmsObj.variablesObj || isEmptyObj(parmsObj.variablesObj)) {
        return parmsObj.json;
    }

    try {
        //Converting JSON to string
        let jsonStr = JSON.stringify(parmsObj.json);

        //string replace function
        let re = new RegExp(Object.keys(parmsObj.variablesObj).join("|"), "gi");

        let dynamicStr = jsonStr.replace(re, function(matched) {
            return parmsObj.variablesObj[matched];
        });

        result = JSON.parse(dynamicStr);
    } catch (error) {
        console.log(`[err] @ dynamicJSON() is `, error);
        result = parmsObj.json;
    }

    return result;
};