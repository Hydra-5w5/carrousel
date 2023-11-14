(function () {
  let indice = 1; // Initialise l'indice à 1 pour commencer avec le bloc du milieu

  // Récupère tous les professeurs
  let professeurs = document.querySelectorAll('.blocflex__profs');

  let boutonGauche = document.querySelector('.btn__gauche');
  let boutonDroite = document.querySelector('.btn__droite');

  // Fonction pour mettre à jour les professeurs affichés
  function mettreAJourAffichage() {
    // Cache tous les professeurs et supprime les classes spéciales
    professeurs.forEach((prof, i) => {
      prof.style.display = 'none';
      prof.classList.remove('selectionne');
      prof.classList.remove('non-selectionne');
    });

    // Affiche trois professeurs et ajoute les classes spéciales
    for (let i = -1; i <= 1; i++) {
      let indiceProf = (indice + i + professeurs.length) % professeurs.length;
      let prof = professeurs[indiceProf];

      
      if (prof) {
        prof.style.display = 'flex';
        if (i === 0) {
          prof.classList.add('selectionne');
        } else {
          prof.classList.add('non-selectionne'); 
        }
      }
    }
  }

  // Appelle mettreAJourAffichage initialement pour afficher les trois premiers professeurs
  mettreAJourAffichage();

  // Gère le bouton de flèche droite
  boutonDroite.addEventListener('mousedown', function () {
    indice = (indice + 1) % professeurs.length;
    mettreAJourAffichage();
  })

  // Gère le bouton de flèche gauche
  boutonGauche.addEventListener('mousedown', function () {
    indice = (indice - 1 + professeurs.length) % professeurs.length;
    mettreAJourAffichage();
  })
})();