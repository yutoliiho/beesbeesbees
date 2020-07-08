var Bee = function () {
  Grub.call(this)
  // this at the moment === new Grub() === bee -->  at the moment.
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
}

Bee.prototype = Object.create(Grub.prototype) // creating a door to other room

Bee.prototype.constructor = Bee

var bee = new Bee();
console.log(bee.eat)

/**
 * invoke superFunction on our instance  --> gives the obj that is identical to super function.
 * at that instance, Bee does not have access to super's protytype.(line 9 with create)
 * Bee's constructor at the moment was pointed to Grub, becuase 'Bee.prototype.constructor = Bee' copied everything from Grub, including constructor. there fore we need to reset the constructor to Bee on line 14
 */