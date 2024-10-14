
'use strict';

/*
function greet(username) {
    console.log(`Hello ${username}`);
  }
  
  function sum(a, b) {
    let result;
    if (!a || !b) {
      console.log("Tu dois entrer les paramètres");
      return;
    }
    result = Number(a) + Number(b);
  
    return result;
  }
  
  const total = sum("3", 3);
  
  console.log(total);

  
*/

function describeCountry( country, population, capitalCity ) {
    return `The country of ${country} has a population of ${population}.\
    \n Its capital is ${capitalCity}.`;
}

console.log( describeCountry( 'Turkey', '84.98', 'Ankara' ) );
console.log( describeCountry( 'Palestine', '5', 'Jerusalem, and Ramallah' ));
console.log( describeCountry( 'Kurdistan', '60', 'Diyarbakir, and also Kermanchah, Erbil, and Hassaké' ) );

// avec console.table, on peut afficher un tableau de données.

/**
 * -> returns percentage of world population
 * @param {Number} population 
 * @returns Number
 */
function percentageWorld1(population) {
    return population / 7900 * 100 ;
}

const TurkeyPop = 84.89 ;
const PalestinePop = 5 ;
const KurdistanPop = 60 ;

console.log( `Turkey has a population of ${TurkeyPop}.\n\
    It amounts to ${Math.trunc(percentageWorld1(TurkeyPop))}% of world population.`);

const percentageWorld2 = function (population) {
    return `${population / 7900 * 100}%`;
}

console.log( `Palestinian population amounts to ${percentageWorld2(PalestinePop)} of world population.\n\
    Kurdish population amounts to ${percentageWorld2(KurdistanPop)} of world population.`);

/* Les fonctions peuvent être exportées dans un autre fichier de module
qui comportera la mention 'export default function myFunctionName(params)',
puis appelées dans un document script avec l'expression 'import {} from 'chemin_relatif_'
et dans le HTML on ajoute l'attribut " type='module' ".
!!! Une seule fonction par défaut par fichier de module est autorisée. */

const percentageWorld3 = (population) => population / 7900 * 100 ;
const KurdPercent = percentageWorld3(KurdistanPop);

console.log( `Kurds are ${KurdPercent}% of world population.`);

function describePop(country, population) {
  return `${country} has a population of ${population} millions.\n\
  It amounts to ${percentageWorld2(population)} of world population.`;
}

let description1 = `${describePop('Palestine', PalestinePop)}`;
let description2 = `${describePop('Kurdistan', KurdistanPop)}`;

console.log(description1);
console.log(description2);

