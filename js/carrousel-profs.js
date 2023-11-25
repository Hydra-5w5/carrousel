(function () {
  let indice = 1; // Initialise l'indice à 1 pour commencer avec le bloc du milieu
  let tourFini = false; // Vérifie si le carrousel à été vu au complet
  let recule = false;
  let avance = true; //
  let indiceProf;
  let prof;
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

    // Détermine le nombre de professeurs à afficher en fonction de la largeur de la fenêtre
    let nbProfsAAfficher = window.innerWidth >= 1300 ? 3 : 1;

    // Affiche les professeurs et ajoute les classes spéciales
    for (let i = -Math.floor(nbProfsAAfficher / 2); i <= Math.floor(nbProfsAAfficher / 2); i++) {
      indiceProf = (indice + i + professeurs.length) % professeurs.length;
      prof = professeurs[indiceProf];

      if (prof) {
        prof.style.display = 'flex';
        if (i === 0) {
          prof.classList.add('selectionne');
        } else {
          prof.classList.add('non-selectionne'); 
        }
      }

    }

    /** MAUVAUS CODE QUI FONCTIONNE
     * Ajoute le prof nécessaire lorsque l'utilisateur recule avec le bouton gauche au lieu d'utiliser les profs générés avec Worpress,
     * 
     */
    if(indiceProf == 0) {
      tourFini = true;
      insertAfter(prof,professeurs[indice]);
    }
    if(tourFini == true) {
      insertAfter(prof,professeurs[indice]);
    }
    if(indiceProf == 1 && tourFini == false )  {
      prof.parentNode.insertBefore(professeurs[professeurs.length-1],professeurs[indice]);
    }
    if(indiceProf == 0 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-2],professeurs[indice]);
    }
    if(indiceProf == 8 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-3],professeurs[indice]);
    }
    if(indiceProf == 7 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-4],professeurs[indice]);
    }
    if(indiceProf == 6 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-5],professeurs[indice]);
    }
    if(indiceProf == 5 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-6],professeurs[indice]);
    }
    if(indiceProf == 4 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-7],professeurs[indice]);
    }
    if(indiceProf == 3 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-8],professeurs[indice]);
    }
    if(indiceProf == 2 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-9],professeurs[indice]);
    }
    if(indiceProf == 1 && tourFini == true) {
      prof.parentNode.insertBefore(professeurs[professeurs.length-1],professeurs[indice]);
    }
    //console.log("indiceProf: " + indiceProf);
    //console.log("indice: " + indice);
  }

  // Appelle mettreAJourAffichage initialement pour afficher les trois premiers professeurs
  mettreAJourAffichage();

 // Met à jour l'affichage chaque fois que la taille de la fenêtre change
  window.addEventListener('resize', mettreAJourAffichage);

  // Gère le bouton de flèche droite
  if(boutonDroite) {
    boutonDroite.addEventListener('mousedown', function () {
      indice = (indice + 1) % professeurs.length;
      mettreAJourAffichage();
    })
  }


  // Gère le bouton de flèche gauche
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