class Person {
    constructor(name, age) {
        // this = {};
        this.name = name;
        this.age = age;
        // return this;
    }

    sayHello() {
        console.log(this.name);
    }

    sakldnaslkd() {
        console.log("Hello!");
    }


}


let tom = new Person("Tom", 22);

tom.sayHello();

console.log(tom);