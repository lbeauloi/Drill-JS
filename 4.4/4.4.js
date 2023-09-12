// // ***CONSIGNES***
// // -----------------------------------------------------------------------------------
// // Create a function pickLearner(inputAr, n) that takes 2 parameters.

// //     inputAr : An array of learners (the one you created in exercise 3.0 for example)
// //     n : A number, that should be greater than 0 and less than the length of inputAr

// // The function should return an array of randomly selected learners.
// // -----------------------------------------------------------------------------------

  function getRandomInt(min, max) {  // créer une fonction qui choisi un nombre entier entre deux valeur; min et max (dans notre cas entre 0 et 26)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function pickLearner(inputAr, n) {
    let randomLearner = []; // creation de l'array randomLearner vide, pret à acceuillir nos randoms leaner
  
    for (let i = 0; i < n; i++) {   //creation d'une boucle afin d'ajouter "n" fois un learner random dans notre array randomLearner
      let randomIndex = getRandomInt(0, inputAr.length - 1); //defnition du numero d'index 
      randomLearner.push(inputAr[randomIndex]); // ajout du learner random à l'array randomLearner
    }
  
    return randomLearner;  // renvoyer l'array contenant les randoms learners
  }
  
  let inputAr = ["Alexandre","Antoine","Bastien","Carole","Dorian","Elisabteh","Elodie","Justin","JustineF", "JustineL","Kimi","Layla","Lidwine","Lucas","Marie","Mathias","Okly","Pierre","Robin","Rosalie","Stephane","Tim","Toms","Valentin","Vens","Virginie"]; //notre array input, avec tout les learners
  let n = getRandomInt(0, 26); // genere un nombre aléatoire entre 0 et 26
  
  let randomLearner = pickLearner(inputAr, n);
  console.log(randomLearner);
  