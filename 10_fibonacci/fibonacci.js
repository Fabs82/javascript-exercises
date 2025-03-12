const fibonacci = function (number) {
    let firstN = 0;
    let secondN = 1;
    let myArray = [];

    if (number == 0) return 0;

    else if (number < 0) return "OOPS";

    else {
        for (let i = 0; i < number; i++) {
            let newN = firstN + secondN;
            secondN = firstN;
            firstN = newN;
            myArray.push(newN);
        };
        return myArray[number - 1]
    };
};

// Do not edit below this line
module.exports = fibonacci;
