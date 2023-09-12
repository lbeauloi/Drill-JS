// ***CONSIGNES***
// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//     Name
//     Production year
//     Names of the cast members (there can be as much as the user want)

// That function must gather all the data in a single object and return it. The data structure must be elegant.

// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
// ----------------------------------------------------------------------------------------------------------------

function askTvSerie () {  //creation de la fonction askTvSeries() 

    let name = prompt("Entre le nom de ton film préféré");  // definition de nos 3 variables sous forme de prompt car on demande a l'utilisateur de saisir une donnée
    let productionYear = prompt("Entre son année de production");
    let castMembers = prompt("Quelle est le nom des acteurs");

    let object = {   // creation de l'objet pour stocker les 3 données dans un seul objet, afin de pouvoir afficher l'objet dans la console
        name: name,
        productionYear: productionYear,
        castMembers: castMembers,
    }
    console.log(object);
    }

askTvSerie(); 
