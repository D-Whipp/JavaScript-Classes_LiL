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
// To GET the array:
// users = JSON.parse(localStorage.getItem("users") || "[]");

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

<<<<<<< HEAD:sandbox/app.js
  const liNode = document.createElement('li');

  // storing in template string literal
  // need to convert to an object instead
  // let radiantInformation = `
  // Name: ${radiantNameNode},
  // Age: ${radiantAgeNode},
  // Height: ${radiantHeightNode} feet, ${radiantInchesNode} inches,
  // Weight: ${radiantWeightNode} pounds
  // `;
  // end template string literal
  // const Kal = new Radiant('Kaladin', 6, 11, 250, 23);
  let newRadiant = new Radiant(
=======
  // const Kal = new Radiant('Kaladin', 6, 11, 250, 23);
  const newRadiant = new Radiant(
>>>>>>> 99c2d5c5409d261f6800a151aac68501ad8ff9a4:sandbox/assets/js/app.js
    radiantNameNode,
    radiantHeightNode,
    radiantInchesNode,
    radiantWeightNode,
    radiantAgeNode
  );
<<<<<<< HEAD:sandbox/app.js
  // console.log(newRadiant);
  // console.log(radiantInformation);
  liNode.innerText = newRadiant;
  radiantListNode.appendChild(liNode);
  // console.log(radiantListNode);
  // console.log(radiantNameNode);
=======
// you need to add a filled array to the outside scope to saveRadiants()
  radiantArray.push(newRadiant);
  displayRadiantArray(radiantArray);
  return radiantArray;
>>>>>>> 99c2d5c5409d261f6800a151aac68501ad8ff9a4:sandbox/assets/js/app.js
}

function saveRadiants() {
  sessionStorage.setItem(
    'radiantList',
    JSON.stringify(radiantListNode)
  );
}

function displayRadiantArray(radiantArrayInput) {
  console.log("I'm listening...", radiantArrayInput);
}

function removeRadiant() {
  let ul = document.getElementById('knights-radiant-list');
  ul.removeChild(ul.firstElementChild);
}