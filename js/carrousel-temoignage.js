(function () {
  let temoignages = document.querySelectorAll('.blocflex__temoignage');
  let indexCourant = 0;
  let btnGauche = document.querySelector('.btn__gauche')
  let btnDroite = document.querySelector('.btn__droite')
  let touchStartX;
  let touchEndX;

  function afficherTemoignage() {
    temoignages.forEach((temoignage, index) => {
      temoignage.style.display = index === indexCourant ? 'block' : 'none';
    });
  }

  function temoignageSuivant() {
    indexCourant = (indexCourant + 1) % temoignages.length;
    afficherTemoignage();
  }

  function temoignagePrecedent() {
    indexCourant = (indexCourant - 1 + temoignages.length) % temoignages.length;
    afficherTemoignage();
  }

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX - touchEndX > 100) {
      temoignageSuivant();
    } else if (touchStartX - touchEndX < -100) {
      temoignagePrecedent();
    }
  }

  if(btnGauche) {
    btnGauche.addEventListener('click', temoignagePrecedent);
  }

  if(btnDroite) {
    btnDroite.addEventListener('click', temoignageSuivant);
  }
  
  if (temoignages) {
    temoignages.forEach((temoignage) => {
      temoignage.addEventListener('touchstart', handleTouchStart);
      temoignage.addEventListener('touchmove', handleTouchMove);
      temoignage.addEventListener('touchend', handleTouchEnd);
    });
  }


  afficherTemoignage();
})();