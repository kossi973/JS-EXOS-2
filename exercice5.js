let listeDeTaches = [];

function ajouterTache(liste, tache) {
  liste.push(tache);
  return liste;
}

function afficherListe(liste) {
  console.log("Liste des taches : " + liste);
  return liste;
}

ajouterTache(listeDeTaches, "Acheter boissons");
ajouterTache(listeDeTaches, " Aller au garagiste");
ajouterTache(listeDeTaches, " Vérifier lavabo");

afficherListe(listeDeTaches);
