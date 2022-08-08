// const Jasnah = new Person('Jasnah', 6, 156, 34);
// console.log(Jasnah.personStats());
// hoistableFunction();

// mixin's are fround upon
let mixin = {
  madeIn() {
    console.log('Made in book 3');
  },
};

let radiantMixin = {
  __proto__: mixin,

  madeIn() {
    super.madeIn();
  },
};

class Radiant {
  constructor(name, height, weight, age) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.age = age;
  }

  radiantStats() {
    return `${this.name} is ${this.height} ft tall, weighs ${this.weight} pounds, and is ${this.age} years old.`;
  }

  static totalPowerLevel(power1, power2) {
    const p1 = power1.age;
    const p2 = power2.age;

    return p1 * p2;
  }
}

class Windrunners extends Radiant {
  constructor(name, height, weight, age, radiantStats, power, spren) {
    super(name, height, weight, age, radiantStats);
    this.power = power;
    this.spren = spren;
    this.team = 'Windrunner';
    this.bridge = 'Bridge 4';

    // assign mixin
    Object.assign(this, radiantMixin);
  }

  myName() {
    return console.log(`This Knights Radiant's name is ${this.name}`);
  }
}

const Kal = new Radiant('Kaladin', 6, 200, 23);
const Teft = new Windrunners(
  'Teft',
  5.11,
  175,
  53,
  'Flight',
  'Phendorana'
);
// const Navani = new Radiant('Navani', 6, 155, 44);
console.log(Teft);
console.log(Teft.myName());
console.log(Teft.madeIn());
console.log(Kal);
// console.log(Kal.radiantStats());
// console.log(Radiant.totalPowerLevel(Kal, Navani));

// function hoistableFunction() {
//   return console.log('I can be called from anywhere!');
// }
