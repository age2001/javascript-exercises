const removeFromArray = function(numList, ...args) {
    let valInList = false;
    let finalNumList = [];
    for (num of numList) {
        for (delVal of args) {
            if (num === delVal) {valInList = true;}
        }
        if (!valInList) {finalNumList.push(num);}
        valInList = false;
    }
    return finalNumList;
};

// Do not edit below this line
module.exports = removeFromArray;
