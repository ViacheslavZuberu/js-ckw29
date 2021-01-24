function Player(name) {
    // this = {}
    this.name = name;
    this.health = 100;
    this.saySomething = function() {
        console.log("Hello, traveller!");
    };
    // return this;
}

let npc1 = new Player("Greg");
let npc2 = new Player("Bob");
let npc3 = new Player("Lane");

npc1.saySomething();

console.log(npc1);
console.log(npc2);
console.log(npc3);