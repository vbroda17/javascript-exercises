const removeFromArray = function(arrOrg, ...argsRM) {
    // Use the filter method to create a new array with elements not present in arr2
    let returnArr = [];
    for(let i = 0; i < arrOrg.length; i++){
        let element = arrOrg[i];

        if(!argsRM.includes(element)) {
            returnArr.push(element);
        }
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
