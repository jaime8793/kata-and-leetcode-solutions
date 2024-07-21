function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player = new Player("steve", "X");
console.log(player.name); // 'steve'

const JamesDetails = new Player("Jaime", "Y");
console.log(JamesDetails);

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
    return this.name;
  };
  this.makeTwo = function () {
    console.log(name + marker);
    return name + marker;
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
console.log(player1.makeTwo());
console.log(player1.sayName());
player1.sayName(); // logs 'steve'
player2.sayName(); //

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${title}by${author},${pages}pages,${read}`);
    return `The ${title} by ${author}, ${pages}pages,${read}`;
  };
}

const hobbit = new Book("Hobbit", "J.R.R. Tolkien", "295", " not read yet");
console.log(hobbit.info());

console.log(Object.getPrototypeOf(player1) === Player.prototype); 
console.log(player1.valueOf());

