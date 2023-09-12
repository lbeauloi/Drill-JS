// *** CONSIGNES ***
// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

// Examples results:

//     Point A = [1, 1], point B = [2, 2] => 1.41
//     Point A = [1, 1], point B = [3, 1] => 2
//     Point A = [4, 1], point B = [1, 1] => 3
//     Point A = [-2, 2], point B = [2, -2] => 5.65

// Create a program to use that function.

// Write a documentation for the calcDistance function.

// Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...

// ------------------------------------------------------------------------------------------------------------------------------------------------

// distance entre deux points : d=√((x2 – x1)² + (y2 – y1)²). Nous avons donc 4 VARIABLES (X1 X2 Y1 et Y2)
// faire une racine carrée en JS : Math.sqrt
// faire un carré: multiplier la valeur par elle même

function calcDistance (x1, x2, y1, y2){
    return(Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1)));
}


// verif pour A (1,1) et B (2,2)
console.log(calcDistance(1,2,1,2));

// verif pour A (1,1) et B (3,1)
console.log(calcDistance(1,3,1,1));

// verfi pour A (4,1) et B (1,1)
console.log(calcDistance(4,1,1,1));

// verif pour A (-2,2) et B (2,-2)
console.log(calcDistance(-2,2,2,-2));


// ***AMELIORATIONS***
// c'est fonctionnel mais je pense que je devrai plutot utiliser des arrays pour definir les points A [1,1] B[2,2] par exemple..... Cela eviterai de devoir renter les coordonnées x1 x2 y1 y2
