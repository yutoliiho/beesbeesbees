var RetiredForagerBee = function () {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

// set prototype:
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// set constructor:
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
// set new methods:
RetiredForagerBee.prototype.gamble = function (value) {
  // console.log(this.prototype.forage)
  this.treasureChest.push(value)
}
// redefine old methods:
RetiredForagerBee.prototype.forage = function () {
  return "I am too old, let me play cards instead"
}