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

// Exercices sur les objets

const myCountry = {
  country: "Turkey (Türkiye)",
  capital: "Ankara",
  language: "TR_tr",
  population: 84.98,
  neighbors: TurkeyNeighbors,
};
