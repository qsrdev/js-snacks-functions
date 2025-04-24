/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function firstletter(array) {
  let namesInitial = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    namesInitial.push(array[i][0]);
  }
  return namesInitial;
}

// Invoca la funzione qui e stampa il risultato in console
let primeletter = firstletter(names);
console.log(primeletter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
