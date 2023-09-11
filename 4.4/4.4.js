// ***CONSIGNES***
// Create a function pickLearner(inputAr, n) that takes 2 parameters.

//     inputAr : An array of learners (the one you created in exercise 3.0 for example)
//     n : A number, that should be greater than 0 and less than the length of inputAr

// The function should return an array of randomly selected learners.


// help : https://www.delftstack.com/fr/howto/javascript/javascript-pick-random-from-array/




function pickLearner (inputAr, n){

    let randomIndexNbre= Math.floor(Math.random()*inputAr.lenght); //def d'une variable pour stocker une valeur d'index random. On multiplie par la longueur de l'array pour avoir un entier.

    let elevRandom= inputAr[randIndexNbre]; // sélection d'un elève random via son numéro d'index précédement défini. (array[numero d'index])

    return(elevRandom);
}


let inputAr= ["Alexandre","Antoine","Bastien","Carole","Dorian","Elisabteh","Elodie","Justin","JustineF", "JustineL","Kimi","Layla","Lidwine","Lucas","Marie","Mathias","Okly","Pierre","Robin","Rosalie","Stephane","Tim","Toms","Valentin","Vens","Virginie"];

let n = 15;

console.log(pickLearner(inputAr, n))


// LA SUITE PEUT ETRE ..... une boucle for avec une condition sur le n du style n>0 && n<inputAr.lenght
