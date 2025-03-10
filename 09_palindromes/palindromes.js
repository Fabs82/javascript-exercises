const palindromes = function (word) {
    formattedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    reversedWord = formattedWord.split("").reverse().join("");
    return formattedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
