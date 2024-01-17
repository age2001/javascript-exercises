const findTheOldest = function(people) {
    let person = people.reduce((p1, p2) => {
        if ("yearOfDeath" in p1 === false) {
            let date = new Date();
            p1.yearOfDeath = date.getFullYear();
        }
        if ("yearOfDeath" in p2 === false) {
            let date = new Date();
            p2.yearOfDeath = date.getFullYear();
        }
        if (p1.yearOfDeath - p1.yearOfBirth > p2.yearOfDeath - p2.yearOfBirth) {
            return p1;
        }
        return p2;
    });
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
