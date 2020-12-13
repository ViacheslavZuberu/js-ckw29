function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}


function doStuff(a, b, c) {
    if (isNumber(a) && !isNumber(b) && !isNumber(c)) {
        return a * a;
    }

    if (isNumber(a) && isNumber(b) && !isNumber(c)) {
        return a * b;
    }

    if (isNumber(a) && isNumber(b) && isNumber(c)) {
        return a + b * c;
    }

    throw "Wrong arguments (doStuff)";
}

console.log(doStuff(4)); // 4
console.log(doStuff(5, 6)); // 30
console.log(doStuff(1, 2, 3)); // 7


function numberToMonth(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
        default:
            throw "Incorrect input!";
    }
}

console.log(numberToMonth(1));
console.log(numberToMonth(12));
console.log(numberToMonth(4));
console.log(numberToMonth(7));
console.log(numberToMonth(13));

