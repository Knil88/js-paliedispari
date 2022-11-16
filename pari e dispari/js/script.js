//Creiamo una funzione che vada a sommare i numeri pari con i dispari

//Andiamo a creare le nostre variabili

let usernum = parseInt(prompt("inserisci un numero da 1 a 5"));

let pcnum = Math.floor(Math.random()* 5) + 1;



// impostiamo un alert se il numero supera il valore 5
if(usernum > 5){
    alert ("Ti ho detto da 1 a 5 ");
    
    console.log("Ti ho detto da 1 a 5 Coglione");
}



console.log(usernum , pcnum);

//Creiamo la variabile somma e la leghiamo alla function che si trova in un file esterno

const somma = sommapariDispari(usernum,pcnum);

console.log( "la somma è ",somma);




