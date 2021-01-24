let userValue = +prompt("Enter the number:");

if (isNaN(userValue)) {
    alert("Enter a numeric value!");
}

if (userValue > 0) {
    console.log("The value is positive!");
} else if (userValue < 0) {
    console.log("The value is negative!");
} else if (userValue === 0){
    console.log("The value is zero!");
}