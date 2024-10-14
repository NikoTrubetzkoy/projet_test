"use strict";

function calcTip(amount) {
  return `${
    amount > 50 && amount < 300 ? (amount * 15) / 100 : (amount * 20) / 100
  }`;
  // 'amount > 50 && amount < 300 ? amount * 0.15 : amount * 20' not as a 'String'
}

console.log(calcTip(15));
console.log(calcTip(77));

const bills = [125, 555, 44];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = [bills[i], tips[i], Number(bills[i]) + Number(tips[i])];
}

console.table(tips);

console.table(totals);
