let entiers = [85, 92, 78, 90, 88];

function calculerMoyenne1(tab) {
  let temp = 0;
  for (let i = 0; i < tab.length; i++) {
    temp += tab[i];
  }
  return temp / tab.length;
}

//autre solution
function calculerMoyenne2(tab) {
  let temp = tab.reduce((a, b) => a + b, 0);

  return temp / tab.length;
}

console.log(calculerMoyenne1(entiers));

console.log(calculerMoyenne2(entiers));
