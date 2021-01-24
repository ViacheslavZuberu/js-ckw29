// Создаем объект текущей даты
let currentDate = new Date();

console.log("Текущая дата:");
console.log(currentDate.toString());
console.log(currentDate);

// Через миллисекунды, которые прошли с 
// 1 января 1970 года
let dateFromMillis = new Date(1200000000000000);

console.log("Из миллисекунд:");
console.log(dateFromMillis);

// Через строку даты
let dateFromDateString = new Date("2020-12-30T03:24:00");

console.log("Из строки:");
console.log(dateFromDateString);

// Через аргументы
let dateFromArguments = new Date(2021, 1, 21, 22, 30);

console.log("Из аргументов:");
console.log(dateFromArguments);

// Задача: 31 Dec 2016

// Форматирование даты
// или [https://momentjs.com/]

console.log("Форматированный вывод:");

console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());

console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());