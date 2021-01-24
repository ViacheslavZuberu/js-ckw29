//! Сумма чисел произвольного диапазона
//? 1, 2, 3, 4, 5, ..., 100.

const FIRST_VALUE = 1;
const LAST_VALUE = 100;

let result = 0;

for (let i = FIRST_VALUE; i <= LAST_VALUE; i++) {
    result += i;
}

console.log(`Сумма чисел от ${FIRST_VALUE} до ${LAST_VALUE}:`, result);

//! Сумма чисел последовательности Фибоначчи
//? 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55

const VALUES_COUNT = 10;

let first = 1;
let next = 1;

let resultFib = first;

for (let i = 1; i < VALUES_COUNT; i++) {
    resultFib += next;

    let tmp = next;
    next += first;
    first = tmp;
}

console.log(`Сумма первых ${VALUES_COUNT} чисел последовательность Фибоначчи:`, resultFib);

//! Возведение числа в степень

const NUMBER = 2;
const POWER = 10;

let powerResult = NUMBER;

for (let i = 2; i <= POWER; i++) {
    powerResult *= NUMBER;
}

console.log(`${NUMBER}^${POWER} = `, powerResult);

//! Запрашивать ввод до тех пор, пока пользователь не введет валидные данные

let age;

do {
    age = +prompt("Enter your age please:");
} while (isNaN(age));

alert("Thank you!");

console.log("User age is", age);
