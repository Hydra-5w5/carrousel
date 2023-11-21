(function () {
  console.log("cool");
  let indice = 1; 
  let tourFini;
  let indiceProf;
  let professeurs = document.querySelectorAll('.blocflex__profs');

  let boutonGauche = document.querySelector('.btn__gauche');
  let boutonDroite = document.querySelector('.btn__droite');

  function mettreAJourAffichage() {
    professeurs.forEach((prof, i) => {
      prof.style.display = 'none';
      prof.classList.remove('selectionne');
      prof.classList.remove('non-selectionne');
    });
    
    for (let i = -1; i <= 1; i++) {
       indiceProf = (indice + i + professeurs.length) % professeurs.length;
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

    if(indice == professeurs.length-1) {
      tourFini = true;
      insertAfter(professeurs[0],professeurs[indice]);
     }
     if(tourFini == true && professeurs[indiceProf+1]) {
      console.log(professeurs[indiceProf].parentNode);
      insertAfter(professeurs[indiceProf+1],professeurs[indiceProf]);
     }
  }

  mettreAJourAffichage();

  if(boutonDroite) {
    boutonDroite.addEventListener('mousedown', function () {
      indice = (indice + 1) % professeurs.length;
      mettreAJourAffichage();
    })
  }

  if (boutonGauche) {
    boutonGauche.addEventListener('mousedown', function () {
      indice = (indice - 1 + professeurs.length) % professeurs.length;
      mettreAJourAffichage();
    })
  }

})();

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}