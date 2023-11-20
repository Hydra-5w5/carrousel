(function () {
  let index = 0; // Initialise l'index à 0
  let longeur = window.innerWidth;
  let hauteur = window.innerHeight;
  // Récupère tous les témoignages
  let temoignages = document.querySelectorAll('.video');
  let btn__gauche = document.querySelector('.btn__gauche');
  let btn__droite = document.querySelector('.btn__droite');
  
  // Fonction pour mettre à jour les temoignages affichés
  function mettreAJourAffichage() {
     
      
    // Cache tous les temoignages 
    temoignages.forEach(tem => tem.style.display = 'none');
      
    
    // Affiche un temoignage
    for (let i = 0; i < 1; i++) {
      let temIndex = (index + i + temoignages.length) % temoignages.length;
      let tem = temoignages[temIndex];

      if (tem) {
        tem.style.display = 'block';
      }
    }
  }
  mettreAJourAffichage();
  //  Appelle mettreAJourAffichage initialement pour afficher les trois premiers temoignages si l'ecran est en version mobile
  
  if(longeur > 700){
      mettreAJourAffichage();
  } else if(longeur < 700){
      temoignages.forEach(tem => tem.style.display = 'block');
  }
 

  // Gère le bouton de flèche droite
  if (btn__droite) {
    btn__droite.addEventListener('mousedown', function () {
      index = (index + 1) % temoignages.length;
      mettreAJourAffichage();
    })
  }

  // Gère le bouton de flèche gauche
  if (btn__gauche) {
    btn__gauche.addEventListener('mousedown', function () {
      index = (index - 1 + temoignages.length) % temoignages.length;
      mettreAJourAffichage();
    })
  }

})();
