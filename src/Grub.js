var Grub = function () {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function () {
  console.log('Grub.eat')
};

var grub = new Grub();
// grub.eat()

