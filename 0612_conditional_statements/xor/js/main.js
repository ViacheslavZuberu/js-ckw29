let a = 5;
let b = 7;

a ^= b;
b ^= a;
a ^= b;

console.log("a=", a);
console.log("b=", b);