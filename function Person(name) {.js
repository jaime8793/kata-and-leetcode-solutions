function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
  return `Hello, I'm ${this.name}!`;
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
    return this.name;
  };
  /*this.getMarker = function () {
    return `This is my marker${marker}`;
  };*/
}

Player.prototype.getMarker = function () {
    console.log(`My marker is '${this.marker}'`);
    return `My marker is '${this.marker}'`;
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player("steve", "X");
const player2 = new Player("Jaime", "O");

console.log(player1.sayName()); // Hello, I'm steve!
console.log(player2.sayName()); // Hello, I'm also steve!

console.log(player1.getMarker()); // My marker is 'X'
console.log(player2.getMarker()); // My marker is 'O'
