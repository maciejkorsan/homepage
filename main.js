const firstName = "Maciek";
const age = 32;

const heading = document.querySelector(".main__heading--js");

console.log(heading);

heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`;

console.log(heading);

const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
  );
};

const calculate = (myNumber) => myNumber * 7;

console.log(calculate(7));

greet(32, "Maciek");

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

function helloWorld() {
  console.log("witaj świecie");
}

helloWorld();

createContent(".week-summary__description--js", "Siema siema");

createContent(".week-summary__title--js", "Podmieniony tytuł");

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`);
  },
  isOperating: true,
  name: "Death Star",
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

const myProperty = "name";

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};

showMeProperty("nieistnieje");

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "Stefan",
  age: 31,
  address: humanOne.address,
};

console.log(typeof 2);
console.log(typeof "2");

if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else if (humanOne.age === humanTwo.age) {
  console.log("są równolatkami");
} else if (humanOne.age === 32) {
  console.log("human one ma 32");
} else {
  console.log("human two jest starszy");
}

if (!("Javascript" == "Java")) {
  console.log("to sie wykona");
}

const myNumber = {name: 'maciek'};

switch (myNumber) {
  case 7:
    console.log('jestem siódemką');
  break;
  case 9: 
    console.log('jestem dziewiątką');
  break;
  default: 
    console.log('jestem czymś innym');
}

if (32 > 20) {
  console.log('to prawda')
} else {
  console.log('to nieprawda')
}

const result = (humanOne.age > humanTwo.age) ? age : false;

console.log(result)