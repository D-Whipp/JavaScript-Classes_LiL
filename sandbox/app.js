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
    return console.log(
      `Knights Radiant ${this.name}, a member of Windrunners`
    );
  }
}

// const Kal = new Radiant('Kaladin', 6, 11, 250, 23);
// const Teft = new Windrunners(
//   'Teft',
//   6,
//   7,
//   225,
//   53,
//   'Flight',
//   'Phendorana'
// );

// DOM manipulation
const formNode = document.querySelector('form');
const radiantListNode = document.getElementById(
  'knights-radiant-list'
);

formNode.addEventListener('submit', (event) => {
  event.preventDefault();
});

function createRadiant() {
  const radiantNameNode = document.getElementById(
    'radiant-name-input'
  ).value;
  const radiantHeightNode = document.getElementById(
    'radiant-height-feet-input'
  ).value;
  const radiantInchesNode = document.getElementById(
    'radiant-height-inches-input'
  ).value;
  const radiantWeightNode = document.getElementById(
    'radiant-weight-input'
  ).value;
  const radiantAgeNode = document.getElementById(
    'radiant-age-input'
  ).value;

  // let radiantSpecs = `${radiantNameNode}`;
  console.log(radiantNameNode);
}

function addRadiant() {
  let ul = document.getElementById('knights-radiant-list');
  let radiant = document.getElementById('radiant-name-input');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(radiant.value));
  ul.appendChild(li);

  radiant.value = null;
}

function removeRadiant() {
  let ul = document.getElementById('knights-radiant-list');
  ul.removeChild(ul.firstElementChild);
}
