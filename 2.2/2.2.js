let min = prompt("Enter a MIN number");
let max = prompt("Enter a MAX number");
let current = prompt("Enter a number between MIN and MAX");

if ((current<=max) && (current>=min)){
   alert(current);
}


// BONUS
if (max<min){
    alert("Ton max doit etre plus grand que ton min, mathématique de base");
}
