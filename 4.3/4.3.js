// ***CONSIGNES*** 

// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

// Write a documentation for the multiRand(n) function.

// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

// ***TECHNIQUE***

// Nous allons utliser la fonction rand10() à l'intérieur d'une nouvelle fonction multiRand(n) afin de générer un array de "n" nombres aléatoire entre 1 et 10


//fonction rand10() qui retourne un entier entre 1 et 10 :
function rand10(){
    return(Math.round(Math.random()*10));
}

let n = prompt("choisi un nombre entier");

// fonction multiRand qui retroune un array de "n" 

// function multiRand (n) {
//    let array= []; //créer un array vide 
//     
//     for (let i=0; i<n; i++){  // boucle pour itérer "n" fois
//         
//         array.push(i) // ajoute chaque élément à la fin du array
//     }
//     return array;
// }

// console.log(multiRand(n))


// fonction multiRand qui retroune un array de "n" NOMBRE ENTIER ALEATOIRE (en utilisant la fonction rand10())

function multiRand (n) {
    let array= [];   // créer un tableau vide
    
    for (let i=0; i<n; i++){   // boucle pour itérer "n" fois
        
        let nombreAleatoire= rand10();  // def une variable qui appelle la fonction rand10() pour générer un nombre aléatoire
        array.push(nombreAleatoire)  // ajoute chaque élément à la fin du array
    }
    return array;  // retourne le tableau contenant les nombres aléatoires
}


console.log(multiRand(n))

