let obj = {};

console.log(obj.toString());
console.log(obj);

let person = {
    firstName: "Tom",
    lastName: "Smith",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        let splittedName = value.split(" ");
        this.firstName = splittedName[0];
        this.lastName = splittedName[1];
    }
};

person.firstName = "Bob";

console.log(person.fullName);

person.fullName = "Jack Sparrow";

console.log(person);