//Creiamo una funzione che vada a sommare i numeri pari con i dispari

let usernum = Math.floor(Math.random()* 100) + 1;

let pcnum = Math.floor(Math.random()* 100) + 1;



console.log(usernum , pcnum);

const somma = sommapariDispari(usernum,pcnum);

console.log( "la somma è ",somma);


