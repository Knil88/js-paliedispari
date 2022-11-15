//creiamo una funzione che sia in grado di riconoscere se una parola è palindroma

//Creiamo la variabile da agganciare alla funzione

let parola = prompt("Inserisci la tua parola")
let parolaInversa = invertiParola(parola);

//Poniamo la condizione che se la parola è uguale a parola invertita è palindroma

if(parola == parolaInversa){
    console.log('la parola è palindroma');
    // Altrimenti non lo è
  } else {
    console.log('la parola non è palindroma');
}
// Creiamo la nostra funzione
function invertiParola(str){
  let parolaInversa = '';

  let i = str.length - 1;
// ci mettiamo un ciclo while
  while (i >= 0) {
    parolaInversa += str[i];
    i--;
  }
//return risultato
  return parolaInversa;
}
