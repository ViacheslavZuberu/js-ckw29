let name = prompt("Enter your name:");

switch (name) {
    case "Bob":
    case "John":
    case "Tom": 
        console.log("You'll be lucky today!");
        break;
    case "Sarah":
        console.log("You'll find your true love today!");
        break;
    default:
        console.log("You'll become rich today!");
}