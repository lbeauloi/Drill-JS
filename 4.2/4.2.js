// ***CONSIGNES*** 

// Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.

// You will have to search on Google how to generate random numbers in JavaScript for this exercise.

// il faut utiliser  Math.random(max); pour générer un nombre ENTRE 0 ET 1 random en JS. La valeur entre () est la valeur max (non comprise)

// ex:
// Math.random()
// console.log(Math.random())
// Cela nous donera par exemple : 0.25 puis 0.15 puis 0.98, puis 0.547 etc etc ... 

// Si on veut du random entre 1 et 10, il faut multiplier par 10 le resulat de Math.random() par 10 ! nous aurons donc dans notre exemple : 2.5, 1.5, 9.8, 5.47 ...

// OR, ici nous voulons "a random integer" ce qui veut dire un chiffre sans virgule ! Nous allons donc devoir arrondir. Pour cela 3 options : Soit on arrondi au dessus (CEIL) soit en dessous  (FLOOR) soit au chiffre le plus proche (ROUND).
// en dessous: console.log(Math.FLOOR(Math.random() *10 )); 
// au dessus: console.log(Math.CEIL(Math.random() *10 )); 
// au plus proche: console.log(Math.ROUND(Math.random() *10 )); 

function rand10(){
    return(Math.round(Math.random()*10));
}

console.log(rand10());