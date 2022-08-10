// preventing form reset on submission
const formNode = document.querySelector('form');
formNode.addEventListener('submit', (event) => {
  event.preventDefault();
});

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

// DOM manipulation
const radiantListNode = document.getElementById(
  'knights-radiant-list'
);

const radiantArray = [];

// setting up localstorage
// To STORE the array, do what you're doing:
// localStorage.setItem("users", JSON.stringify(users));
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

  // const Kal = new Radiant('Kaladin', 6, 11, 250, 23);
  const newRadiant = new Radiant(
    radiantNameNode,
    radiantHeightNode,
    radiantInchesNode,
    radiantWeightNode,
    radiantAgeNode
  );
  // you need to add a filled array to the outside scope to saveRadiants()
  JSON.stringify(newRadiant);
  radiantArray.push(newRadiant);
  displayRadiantArray(radiantArray);
  return radiantArray;
  // return newRadiant;
}

function saveRadiants() {
  sessionStorage.setItem('radiantList', radiantArray);
}

// To GET the array:
// users = JSON.parse(localStorage.getItem("users") || "[]");
function getRadiants() {
  let radiants = JSON.parse(
    localStorage.getItem('radiantList') || '[]'
  );
  console.log(radiants);
}

function displayRadiantArray(radiantArrayInput) {
  console.log("I'm listening...", radiantArrayInput);
}

function removeRadiant() {
  let ul = document.getElementById('knights-radiant-list');
  ul.removeChild(ul.firstElementChild);
}
