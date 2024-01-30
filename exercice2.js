rechercherElement = function (x, tab) {
  let i = 0;
  let res = false;

  while (i < tab.length && res == false) {
    if (tab[i] === x) {
      res = true;
    }
    i++;
  }
  return res;
};

let nb = parseInt(prompt("Entrez un nombre"));

let entiers = [12, 34, 56, 78, 90];

console.log(rechercherElement(nb, entiers));

//autre solution
console.log(entiers.includes(nb));
