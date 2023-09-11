// **CONSIGNES**
// Write a program that will display the minimum and maximum elements of a given array.

// **TECHNIQUE**
// sort the array in ascending order. Once the array is sorted, the first element of the array will be the minimum element and the last element of the array will be the maximum element.

// utiliser le sort ()

// !!! PROBLEME !!! le sort () converti en string donc quand il trie [10 5 80 2] il nous donne [10 2 5 80] ce que n'est pas par ordre croissant ! 
// *** SOLUTION*** utiliser une fonction de comparaison afin de trier par ordre crossant ou décroissant
// function comparaisonCroissante(a, b) {
//     return a - b;
// }

// en soustrayant b de a (a - b), nous obtenons un résultat négatif si a est inférieur à b, ce qui signifie que a devrait être placé avant b dans le tableau trié, ce qui aboutit à un tri croissant. ex : 
//  a = 3 et b = 5, a - b = -2, ce qui signifie que a doit précéder b.
// Ne pas oublier d'appeler la fonction dans le sort ()


let arrayTest = [1,84,25,96,712,2,35,78,36,500];

function comparaisonCroissante(a,b){
    return a-b;
}

let arrayClasseCroissant = arrayTest.sort(comparaisonCroissante);

console.log(arrayClasseCroissant); 

let min = arrayClasseCroissant[0];
let max = arrayClasseCroissant[arrayClasseCroissant.length - 1]

console.log(min);
console.log(max);