"use strict";

const percentageWorld = (population) => (population / 7900) * 100;

const populations = new Array("87", 45, "22", 36.8);

console.log(`${populations.length === 4 ? "True" : "False"}.\n`);
// en plus court : 'console.log( populations.length === 4 );'.

const percentage = new Array(
  percentageWorld(populations[0]).toFixed(4),
  percentageWorld(populations[1]).toFixed(4),
  percentageWorld(populations[2]).toFixed(4),
  percentageWorld(populations[3]).toFixed(4)
);

console.table(percentage);

for (let i = 0; i < populations.length; i++) {
  console.log("-> " + typeof populations[i] + "\t" + typeof percentage[i]);
}

// *    *   *

const TurkeyNeighbors = new Array(
  "Bulgaria",
  "Greece",
  "Georgia",
  "Azerbaijan",
  "Armenia",
  "Iran",
  "Irak",
  "Syria"
);

TurkeyNeighbors.push("Kurdistan");

console.log(TurkeyNeighbors);

TurkeyNeighbors.pop();

console.log(TurkeyNeighbors);

if (!TurkeyNeighbors.includes("Germany")) {
  console.log("Your country may not be located in central Europe.");
}

TurkeyNeighbors.push("Kurdistan");

TurkeyNeighbors[TurkeyNeighbors.indexOf("Kurdistan")] =
  "Confederal Democratic Republic of Kurdistan";

console.log(TurkeyNeighbors);

TurkeyNeighbors.pop();

// Exercices sur les objets

/*
  const myCountry = {
  country: "Turkey (Türkiye)",
  capital: "Ankara",
  language: "TR_tr",
  population: 84.98,
  neighbors: TurkeyNeighbors,
};

console.log(`${myCountry.country} has ${myCountry.population} millions people.\n\
    Its language has ISO code :'${myCountry.language}.\n\
    It has ${myCountry.neighbors.length} neighboring countries.\n\
    Its capital is ${myCountry.capital}.`);

myCountry.population += 2;
// console.log(myCountry.population);

myCountry["population"] -= 2;
// console.log(myCountry.population);
*/

let myYear = 2024;

const personalInfo = {
  firstName: "Henry",
  lastName: "De St-Roy",
  birthYear: 1977,
  birthPlace: "Leuwen",
  job: "Situationist",
  relativesFirstName: ["Eusebe", "Achilles", "Demosthenes"],
  getAge: function (currentYear) {
    this.age = currentYear - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} ${this.lastName} was born in ${
      this.birthYear
    } in ${this.birthPlace}.\n\
He is ${this.getAge(myYear)}, works as a ${
      this.job
    } and his relatives' names are : "${this.relativesFirstName}"`;
  },
};

console.log(personalInfo.getSummary());

const myCountry = {
  country: "Turkey (Türkiye)",
  capital: "Ankara",
  language: "TR_tr",
  population: 84.98,
  neighbors: TurkeyNeighbors,
  describeCountry: function () {
    console.log(`${this.country} has ${this.population} millions people.\n\
      Its language has ISO code :'${this.language}.\n\
      It has ${this.neighbors.length} neighboring countries.\n\
      Its capital is ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};

myCountry.describeCountry();

console.log(
  `They say ${
    myCountry.country
  } is an island ; that is ${myCountry.checkIsland()} !!`
);

console.log(myCountry);
