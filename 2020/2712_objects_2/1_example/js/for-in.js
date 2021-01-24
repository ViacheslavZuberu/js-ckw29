let person = {
    name: "Tom",
    surname: "Soyer",
    birthday: {
        day: 20,
        month: 12,
        year: 1977
    },
    age: undefined
};

function copy(obj) {
    let copy = {};

    for (let prop in obj) {
        copy[prop] = obj[prop];
    }

    return copy;
}

let personCopy = copy(person);

personCopy.name = "Bob";

console.log(person);
console.log(personCopy);

