var ForagerBee = function () {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  // this.color = inheritedd from Bee;
  // this.food = inheritedd from Bee;
  this.canFly = true;
  this.treasureChest = [];
};

// set prototype:
// ForagerBee.prototype = Object.create(Bee);
ForagerBee.prototype = Object.create(Grub.prototype);

// set constructor:
ForagerBee.prototype.constructor = ForagerBee;

// set new methods:
ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
}

// var bees = new Bee()
// console.log(bees.eat)
// var foragerBee = new ForagerBee();
// console.log(foragerBee.eat)