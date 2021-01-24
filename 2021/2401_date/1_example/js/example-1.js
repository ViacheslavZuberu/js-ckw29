// Создаем объект текущей даты
let currentDate = new Date();

console.log("Текущая дата:");
console.log(currentDate.toString());
console.log(currentDate);


// Через миллисекунды, которые прошли с 
// 1 января 1970 года
let dateFromMillis = new Date(0);

console.log("Из миллисекунд:");
console.log(dateFromMillis);

// Через строку даты
let dateFromDateString = new Date("1995-12-17T03:24:00");

console.log("Из строки:");
console.log(dateFromMillis);