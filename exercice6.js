// Objet représentant un livre avec des propriétés telles que le titre, l'auteur et l'année de publication.
function creerLivre(leTitre, lAuteur, lAnnee) {
  let livre = {
    titre: leTitre,
    auteur: lAuteur,
    annee: lAnnee,
  };
  return livre;
}

function ajouterLivre(biblio, livre) {
  biblio.push(livre);
  return biblio;
}

function afficherBiblio(biblio) {
  console.log("Liste de livres : ");
  biblio.forEach(function (bouquin) {
    console.log(
      "Titre : " +
        bouquin.titre +
        ", Auteur : " +
        bouquin.auteur +
        ", Année : " +
        bouquin.annee
    );
  });
  return;
}

//créer les livres
let livre1 = creerLivre("Les Lapins", "JP", 1985);
let livre2 = creerLivre("Les Chouettes", "KL", 2000);
let livre3 = creerLivre("Montagnes", "GEO", 1990);

// Définit la bibliothèque
let bibliotheque = [];

// Remplir la bibliothèque
ajouterLivre(bibliotheque, livre1);
ajouterLivre(bibliotheque, livre2);
ajouterLivre(bibliotheque, livre3);

//Afficher la liste des livres de la bibliothèque
afficherBiblio(bibliotheque);
