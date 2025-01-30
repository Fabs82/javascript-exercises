const removeFromArray = function (myArray, ...nums) {
    for (let num of nums) {
        myArray = myArray.filter(function (item) {
            return item !== num;
        })
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;