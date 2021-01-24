// ES6+
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    static getAvgAge() {
        return 70;
    }
}

class Student extends Person {
    constructor(name, surname) {
        super(name, surname);
        this.grade = 12;
    }
}

let tom = new Student("Tom", "Smith");

console.log(tom);
console.log(tom.getFullName());

console.log(Person.getAvgAge());