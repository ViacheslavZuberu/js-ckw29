// Recursion
// a() -> a() -> a()...
// a() -> b() -> a()...

function showDecValues(value) {
    console.log(value);

    if (value <= 0) {
        return;
    }

    showDecValues(--value);
}

showDecValues(10);

// 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 ...

function fib(n) {
    if (n <= 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(8)); // 21
console.log(fib(7)); // 13
console.log(fib(4)); // 3