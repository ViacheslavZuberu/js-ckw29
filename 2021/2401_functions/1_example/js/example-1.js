// Анонимные самовызывающиеся функции
// Anonymous Self-Invoking Functions (ASIF)

(function() {
    // Code...
    console.log("Hello, World!");
})();


let myData = (function() {
    let currentDate = new Date();

    console.log(currentDate);

    return Math.log(currentDate.getTime());
})();

console.log(myData);

function createCounter() {
    let counter = 0;

    return function() {
        return ++counter;
    }
}

let counterFunction = createCounter();

console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());