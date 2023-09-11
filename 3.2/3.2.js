let total=0;
let array = [1,2,3,4,5];

// **BOUCLE FOR POUR JUSQU A ARRIVER A LA LONGUEUR DU TABLEAU**
// memes bases que 3.1, la moyenne c'est le total divisé taille du tableau (array.length)

for (let i = 0; i < array.length; i++) {
    total = total +array[i];
}

let moyenne = total/array.length;

console.log(moyenne);