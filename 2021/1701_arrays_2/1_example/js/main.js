const testArray = [4, 324, 34, 2, 3, 5, 1];

//? .forEach - позволяет как в цикле for
//? пройтись по всем элементам
testArray.forEach(function(element) {
    console.log(element);
});

for (let i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
}

//? .map - возвращает новый модифицированный массив элементов
const changedArray = testArray.map(function(element, index) {
    return {
        id: index,
        value: element,
        toString: function() {
            return `[${this.id} ${this.value}]`;
        }
    };
});

console.log(changedArray);

// function map(callback) {
//     const arr2 = [];

//     for (let i = 0; i < array.length; i++) {
//         arr2[i] = callback(array[i], i);
//     }

//     return arr2;
// }

//? .join - "склеивает" все элементы массива в строку
console.log(testArray.join(" - "));
console.log(changedArray.join(" * "));

const keyWords = "coding,development,computer science";
const keyArray = keyWords.split(",");

console.log(keyArray);

//? .reverse - переварачивает массив
testArray.reverse();

console.log(testArray);

//! mutable, immutable methods

//? .sort
testArray.sort(function(a, b) {
    return b - a;
});
console.log(testArray);

delete testArray[2];

//? .concat - "склеивание" массивов
//? .slice - "нарезание" массива
//? .splice - удаление (вырезание) элементов массива (mutable)