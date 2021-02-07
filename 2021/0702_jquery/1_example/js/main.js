const value = 12345324182130;

function findBiggestDigit(value, maxDigit) {
    if (value >= 0 && value < 10) {
        if (maxDigit === undefined || maxDigit < value) {
            return value;
        }

        return maxDigit;
    }

    const lastDigit = value % 10;
    value -= lastDigit;
    value /= 10;

    if (maxDigit === undefined) {
        maxDigit = lastDigit;
    } else if (lastDigit > maxDigit) {
        maxDigit = lastDigit;
    }

    return findBiggestDigit(value, maxDigit);
}

console.log(findBiggestDigit(value));