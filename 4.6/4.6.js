// *** CONSIGNES ***
// Create a function factorial(a) that returns the factorial of a number.

// That function must be recursive.
// ---------------------------------------------------------------------------
// Factorielle ? notation mathématique n! ex: 8! = 8*7*6*5*4*3*2*1          REM: 0! = 1
// Pas de notation en JS (comme par exemple Math.sqrt) soit utiliser fonction récursive soit une boucle 


function factorielle(n) {
    // Cas de base : "Une fonction récursive doit avoir un ou plusieurs cas de base, c'est-à-dire des situations où elle ne s'appelle pas elle-même et renvoie une valeur immédiate. Les cas de base sont essentiels pour éviter une boucle infinie."

    // cas de base : si n est égal à 0 ou 1, renvoyer 1
    if (n === 0 || n === 1) {
      return 1;
    }
    
    // Cas récursif : calculer n * factorielle(n - 1)
    return n * factorielle(n - 1); //ex si n=5 --> début de la boucle 5*factorielle(5-1) --> factorielle de 4 = 4*factorielle de 3 --> donc 5*factorielle(4) devient --> 5*4 factorielle de 3 ou encore --> 5*4*factorielle(3) et ainsi de suite jusqu'a n=1 (=CAS DE BASE)
  }
  
// verif avec n=4 (devrait renvoyer 4*3*2*1 donc 24)
console.log(factorielle(4));

//verif avec n=5 (dervait renvoyer 120)
console.log(factorielle(5))


