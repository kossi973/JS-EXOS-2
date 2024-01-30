let entiers = [7, 12, 9, 34, 18, 5, 7, 88, 104, 9];

function filtrerPairs(tab1) {
  let temp = 0;
  let tab2 = [];
  for (let i = 0; i < tab1.length; i++) {
    if (tab1[i] % 2 === 0) {
      tab2.push(tab1[i]);
    }
  }
  return tab2;
}

console.log(filtrerPairs(entiers));
