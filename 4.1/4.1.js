// ***CONSIGNES*** 

// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

// Write a documentation for the calcSurface function.




// simple fonction pour calculer la surface
function calcSurface (l,w) {
    return (l*w);
}

// demande à l'utilisateur d'entreé la longueur et largeur
let l = prompt("Indiquer la longueur du rectangle");
let w = prompt("Indiquer la largeur du rectangle");

// appel de la fonction
console.log("La surface du rectangle est " + calcSurface (l,w));