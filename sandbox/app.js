// const Jasnah = new Person('Jasnah', 6, 156, 34);
// console.log(Jasnah.personStats());
// hoistableFunction();
const radiantList = document.getElementById('knights-radiant-list');
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
  constructor(name, heightFeet, heightInches, weight, age) {
    this.name = name;
    this.heightFt = heightFeet;
    this.heightIn = heightInches;
    this.weight = weight;
    this.age = age;
  }

  radiantStats() {
    return `${this.name} is ${this.heightFt} feet ${this.heightIn} inches tall, weighs ${this.weight} pounds, and is ${this.age} years old.`;
  }

  static totalPowerLevel(power1, power2) {
    const p1 = power1.age;
    const p2 = power2.age;

    return p1 * p2;
  }
}

class Windrunners extends Radiant {
  constructor(
    name,
    heightFeet,
    heightInches,
    weight,
    age,
    radiantStats,
    power,
    spren
  ) {
    super(name, heightFeet, heightInches, weight, age, radiantStats);
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

const Kal = new Radiant('Kaladin', 6, 11, 250, 23);
const Teft = new Windrunners(
  'Teft',
  6,
  7,
  225,
  53,
  'Flight',
  'Phendorana'
);

// radiantList.push(Kal);
// radiantList.push(Teft);
// console.log(radiantList);

// const Navani = new Radiant('Navani', 6, 155, 44);
// console.log(Teft);
// console.log(Teft.myName());
// console.log(Teft.madeIn());
// console.log(Kal);
// console.log(Kal.radiantStats());
// console.log(Radiant.totalPowerLevel(Kal, Navani));

// function hoistableFunction() {
//   return console.log('I can be called from anywhere!');
// }

// DOM manipulation
function addRadiant() {
  let ul = document.getElementById('knights-radiant-list');

  let radiant = document.getElementById('radiantInput');
  let li = document.createElement('li');
  li.setAttribute('id', 'radiant');
  li.appendChild(document.createTextNode(radiant.value));
  ul.appendChild(li);
}

function removeRadiant() {
  let ul = document.getElementById('knights-radiant-list');
  ul.removeChild(ul.firstElementChild);
  // let radiant = document.getElementById('radiantInput');
  // let item = document.getElementById(radiant.value);
  // ul.removeChild(item);
}

// const bodyNode = document.querySelector('body');
// const ulNode = document.createElement('ul');
// const liNode = document.createElement('li');
// const liNodeTwo = document.createElement('li');
// liNode.innerHTML = "I'm listening...";
// liNode.innerHTML = Kal.radiantStats();
// liNodeTwo.innerHTML = Teft.radiantStats();
// radiantList.appendChild(liNode);
// console.log(radiantList);
// radiantList.appendChild(liNodeTwo);
// const liUlNode = ulNode.appendChild(liNode);
// const liUlNode = ulNode.appendChild(liNodeTwo);
// bodyNode.appendChild(liUlNode);
