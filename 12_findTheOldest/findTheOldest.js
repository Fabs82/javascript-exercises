const findTheOldest = function (people) {
    const today = new Date();
    const fullYear = today.getFullYear();

    people.forEach(element => {
        if (element.yearOfDeath)
            element.age = element.yearOfDeath - element.yearOfBirth;
        else
            element.age = fullYear - element.yearOfBirth;
    });

    const oldestPerson = people.reduce((oldest, current) => {
        return (oldest.age > current.age) ? oldest : current;
    });
    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
