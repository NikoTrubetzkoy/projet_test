// tests d'exécution de JavaScript

/*console.log("Hello, World !"); */

let my_name = "Henry De St-Roy";

let birthYear = 1977;

/* console.log(my_name, " ", birthYear); */

let country = "Turkey (Türkiye)";
let continent = ["Asia", "Europe"];
let population = 84.98;

console.log(
  'Le pays est : "',
  country,
  '".\n',
  'Il est situé en : "',
  continent,
  '"\n'
);

console.log(
  'Sa population est de : "',
  population,
  " millions d'habitants\".\n"
);

let isIsland = false;
let language;

console.log(
  'La variable "isIsland" est de type : "',
  typeof isIsland,
  '".\nLa variable "language" est de type : ',
  typeof language,
  '".'
);

/* const pi2d = 3.14; */

language = "TR_tr";
//pi2d= "3.1415" ; //  !!! Interdit car il s'agit d'une 'const'.
//--> TypeError: invalid assignment to const 'pi2d'

/* console.log(language, pi2d); 

let ray;
ray = 2.5;

console.log(`Un cercle de rayon ${ray} a un périmètre de : `, 2 * ray * pi2d);

ray++;

console.log(`Un cercle de rayon ${ray} a un périmètre de : `, 2 * ray * pi2d);

let halfPop = population / 2;
population++;

console.log(
  "Avec un milliard de plus, la moitié de la population turque est de ",
  halfPop,
  ".\n"
);
*/

let FinPop = 6;
let meanPop = 33;

console.log(
  "La population turque est-elle supérieure à la moyenne ?\n",
  population > meanPop,
  "\nLa population finlandaise est-elle plus nombreuse ?\n",
  FinPop > population
);

let description = `The country ${country} has ${population} billions citizen \
and is located both in ${continent[0]} and in ${continent[1]}. Its language code is '${language}'.`;

console.log(description);

// console.log( description[10]);

let result;

if (population > meanPop) {
  result = `Population in ${country} is larger than average (${population} vs. ${meanPop} millions).\
  \nIt's ${population - meanPop} millions over average.`;
} else {
  result = `Population in ${country} is less than average (${population} vs. ${meanPop} millions).\
  \nIt's ${(meanPop - population)} millions under average.`;
}

console.log(result);

let temp_pop = population;
population = 15;
//population = 33;

let result2;

if (population > meanPop) {
  result2 = `A population of ${population} is larger than average (${population} vs. ${meanPop} millions).`;
} else if (population == meanPop) {
  result2 = `A population of ${population} is equal to average (${population} vs. ${meanPop} millions).`;
} else {
  result2 = `A population of ${population} is less than average (${population} vs. ${meanPop} millions).`;
}

console.log(result2);

population = temp_pop;

console.log(
  "La population turque est-elle toujours supérieure à la moyenne ?\n",
  population > meanPop
);

const myYear = '1871';
console.log( 'Centenaire de la Commune', Number(myYear) + 100);

/*
const numNeighbors = Number( prompt( `How many neighbouring countries for ${country} ?`) );
let message = '';

if (numNeighbors === 1) {
  message = 'There\'s only one neighbor.';
} else if ( numNeighbors > 1 ){
  message = 'There is more than one neighbor.';
} else {
  message = 'This country has no borders.';
}

console.log( message);
*/

let hasLangageEng;

/*
if (language === 'EN_en') {
  hasLangageEng = true;
} else {
  hasLangageEng = false;
}

if ( population < 50 && hasLangageEng && ! isIsland ) {
  msg2Sarah = `Sarah should live in ${country}.`;
} else {
  msg2Sarah = `Sarah should not live in ${country}.`;
}
*/

const newPopulation = 22;
const newLanguage = 'EN_en';

if (newLanguage === 'EN_en') {
  hasLangageEng = true;
} else {
  hasLangageEng = false;
}

if ( newPopulation < 50 && hasLangageEng && ! isIsland ) {
  msg2Sarah = `Sarah should live in ${country}.`;
} else {
  msg2Sarah = `Sarah should not live in ${country}.`;
}


console.log( msg2Sarah)

