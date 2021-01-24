function countDigits(value) {
    let digitsCount = 0;

    value = Math.abs(value);

    if (value === 0) {
        return 1;
    }

    while (value >= 1) {
        digitsCount++;
        value /= 10;
    }

    return digitsCount;
}

function invertDigits(k) {
    if (typeof k !== 'number' || isNaN(k)) {
        throw 'Value has to be a number!'
    }

    if (k <= 0) {
        throw 'Value has to be a positive number!';
    }

    if (countDigits(k) !== 5) {
        throw 'Value has to have exactly 5 digits!';
    }

    let result = 0;

    while (k >= 1) {
        result *= 10;
        result += k % 10;
        k -= k % 10;
        k /= 10;
    }

    return result;
}

console.log(12345, invertDigits(12345));
console.log(90123, invertDigits(90123));