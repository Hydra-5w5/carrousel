(function () {
  let index = 0; // Initialise l'index à 0

  // Récupère tous les blocflexProfs
  let blocflexProfs = document.querySelectorAll('.blocflex__profs');

  let btn__gauche = document.querySelector('.btn__gauche');
  let btn__droite = document.querySelector('.btn__droite');

  // Fonction pour mettre à jour les blocflexProfs affichés
  function mettreAJourAffichage() {
    // Cache tous les blocflexProfs
    blocflexProfs.forEach(prof => prof.style.display = 'none');

    // Affiche deux blocflexProfs
    for (let i = 0; i < 2; i++) {
      let profIndex = (index + i) % blocflexProfs.length;
      let prof = blocflexProfs[profIndex];

      if (prof) {
        prof.style.display = 'flex';
      }
    }
  }

  // Appelle mettreAJourAffichage initialement pour afficher les deux premiers blocflexProfs
  mettreAJourAffichage();

  // Gère le bouton de flèche droite
  btn__droite.addEventListener('mousedown', function () {
    index = (index + 1) % blocflexProfs.length;
    mettreAJourAffichage();
  })

  // Gère le bouton de flèche gauche
  btn__gauche.addEventListener('mousedown', function () {
    index = (index - 1 + blocflexProfs.length) % blocflexProfs.length;
    mettreAJourAffichage();
  })
})();