let monTexte =
  "JavaScript est un langage de programmation largement utilisé pour le développement web. Il est polyvalent et peut être utilisé pour créer des applications web dynamiques. Les développeurs JavaScript utilisent fréquemment des bibliothèques comme React et Angular.";

function statistiquesMots(texte) {
  let i = 0;
  let nbEspaces = 0;
  let nbMots = 0;

  while (i != -1) {
    i = texte.indexOf(" ", i);
    if (i >= 0) {
      i++;
      nbEspaces++;
    }
  }
  if (nbEspaces > 0) {
    nbMots = nbEspaces + 1;
  }
  return nbMots;
}

function statistiquesPhrases(texte) {
  let i = 0;
  let nbPhrases = 0;

  while (i != -1) {
    i = texte.indexOf(".", i);
    if (i >= 0) {
      i++;
      nbPhrases++;
    }
  }

  i = 0;
  while (i != -1) {
    i = texte.indexOf("?", i);
    if (i >= 0) {
      i++;
      nbPhrases++;
    }
  }

  i = 0;
  while (i != -1) {
    i = texte.indexOf("!", i);
    if (i >= 0) {
      i++;
      nbPhrases++;
    }
  }
  return nbPhrases;
}

function statistiquesParagraphes(texte) {
  let i = 0;
  let retourChariots = 0;
  let nbParagraphes = 0;

  while (i != -1) {
    i = texte.indexOf("\n", i);
    if (i >= 0) {
      i++;
      retourChariots++;
    }
  }
  return (nbParagraphes = retourChariots + 1);
}

//objet statistisques
function statistiquesTexte(texte) {
  let statsTexte = {
    nbMots: statistiquesMots(texte),
    nbCar: texte.length,
    nbPhrases: statistiquesPhrases(texte),
    nbParagraphes: statistiquesParagraphes(texte),
  };
  return statsTexte;
}

//fonction affichage des statistiques du texte
function statsTexte(texte) {
  let statsDuTexte = statistiquesTexte(texte);
  console.log("Affichage des statistiques du texte : ");
  console.log(texte);
  console.log("Nombre de mots est : " + statsDuTexte.nbMots);
  console.log("Nombre de caractères est : " + statsDuTexte.nbCar);
  console.log("Nombre de phrases est : " + statsDuTexte.nbPhrases);
  console.log("Nombre de paragraphes est : " + statsDuTexte.nbParagraphes);
}

//afficher statistiques du texte
statsTexte(monTexte);
