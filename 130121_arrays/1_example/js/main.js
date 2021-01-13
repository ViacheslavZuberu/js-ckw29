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

