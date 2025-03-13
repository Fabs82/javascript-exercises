const getTheTitles = function (books) {
    titles = [];
    books.forEach(element => { titles.push(element.title) });
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;

// ALTERNATIVE AND BETTER SOLUTION
//const getTheTitles = function (array) {
//return array.map((book) => book.title);
//};