function changeName(person) {
    person.name = "Bob";
}

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

changeName(person);

console.log(person.name);

let p1 = {
    name: "Tom",
    surname: "Soyer"
};

let p2 = p1;

p2.name = "John";

console.log(p1.name);
