// for..in
// objects = links

var myLittleKitty = 32434;

// 1 million code lines later...

if (condition) {

    {
        let myLittleKitty = "Hello";
    }

}

// 1 million code lines later...

let result = userHeight * Math.PI - Math.E;

const a = {};
const b = 5;

// ERROR!
// a = 324;
// b = 234;

a.prop = 123;

function hello(value) {
    value.name = 123;
}

hello(a);
// a.name == 123 - true

hello(b);

let c = {};
let n = c;

n.hello = 123;

console.log(c.hello); // 123

let person = {
    name: "Tom",
    age: 32
};

for (let key in person) {
    console.log(person[key]);
}

let shopItems = [
    {
        title: "Spoon",
        price: 3.6,
        quantity: 10,
        bought: true
    },
    {
        title: "Knife",
        price: 10.4,
        quantity: 114,
        bought: false
    },
    {
        title: "Fork",
        price: 3.6,
        quantity: 15,
        bought: true
    }
];

console.log(shopItems[1].quantity);

function addItem(item, items) {

}

addItem({
    title: "Spoon",
    price: 3.6,
    quantity: 10,
    bought: true
}, shopItems);

let a = {
    name: 213,
    age: 12
};

let b = { ...a };