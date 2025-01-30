const reverseString = function (word) {
    let reversedString = ""
    let array = word.split("").reverse()
    for (let index = 0; index < array.length; index++) {
        reversedString += array[index];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
