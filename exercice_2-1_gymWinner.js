"use strict"; // Expression pour s'assurer que les variables soient déclarées.

// Exercice

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function checkWinner(avgDauphins, avgKoalas) {
  if (avgDauphins >=   avgKoalas * 2) {
    console.log(
      `L'équipe gagnante est celle des Dauphins (${avgDauphins} à ${avgKoalas}).\n`
    );
  } else if (avgKoalas >= avgDauphins * 2) {
    console.log(
      `L'équipe gagnante est celle des Koalas (${avgKoalas} à ${avgDauphins}).\n`
    );
  } else {
    console.log("C'est un match nul !");
  }
}

let scoreDauphinsTest1 = calcAverage(44, 23, 71);
let scoreKoalasTest1 = calcAverage(65, 54, 49);

let scoreDauphinsTest2 = calcAverage(85, 54, 41);
let scoreKoalasTest2 = calcAverage(23, 34, 27);

//  TEST 1
checkWinner(scoreDauphinsTest1, scoreKoalasTest1);

// TEST2
checkWinner(scoreDauphinsTest2, scoreKoalasTest2);
