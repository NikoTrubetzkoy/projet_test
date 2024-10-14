
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark;
let BMIJohn;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

console.log("L'IMC de Mark est de : ", BMIMark + '.');
console.log("L'IMC de John est de : ", BMIJohn + '.\n');

let markHigherBMI = BMIJohn < BMIMark;

console.log('Mark a-t-il un IMC plus élevé ?');
console.log(markHigherBMI);

