function printNumbers(modify) {
    for (let i = 1; i <= 10; i++) {
        console.log(modify(i));
    }
}

printNumbers(function sqr(value) {
    return value * value;
});