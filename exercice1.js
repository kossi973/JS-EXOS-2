somme = function (tab) {
  return tab.reduce((a, b) => a + b, 0);
};

let entiers = [2, 4, 6, 8, 10];

let sum = somme(entiers);
console.log(sum); // 20
