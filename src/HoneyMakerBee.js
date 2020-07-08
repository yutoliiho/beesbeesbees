var HoneyMakerBee = function () {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  // this.color = inherited from grub;
  // this.foor = inherited from grub;
  this.honeyPot = 0;
};

// copy prototypies from Bee:
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// set constructor to HoneyMakerBee from Bee:
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// new methods:
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
}

// invoking function:
// var honeyMakerBee = new HoneyMakerBee();