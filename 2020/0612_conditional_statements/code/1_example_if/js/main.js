const MIN_AGE = 12;

let age = +prompt("Enter your age:");

if (isNaN(age)) {
    alert("Enter a numeric value!");
}

if (age < MIN_AGE) {
    alert("Close this tab!");
} else {
    alert("Hello!");
}
