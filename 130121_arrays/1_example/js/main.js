// Индекс начинается НЕ с 1, а с 0
const names = ["Bob", "Tom", "Sarah", "Dima", "Nic"];
let numbers = [4, 5, 3, 1, 8, 11];
let booleans = [true, true, false, true];

console.log(names[1]); // "Tom"
console.log(names[5]); // undefined

names[0] = "Jack";

console.log(names);

// Длинная массива = кол-во эоементов массива
// Sparse-Arrays
let sparseArray = [,,,,,,5];

console.log(names.length);
console.log(sparseArray);

numbers[6] = 3.1415;

console.log(numbers);


// 1) Вывести массив
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2) Вывоести только четные элементы
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        console.log(numbers[i]);
    }
}

// 3) Сумма элементов
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// 4) Максимальный элемент
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}

console.log(max);

let arr = [];

arr[arr.length] = 123;
