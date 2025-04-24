/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// const letter = prompt("Dammi la tua letter: A")
let letter = "a";

// Dichiara la funzione qui.
function sortby(array, startletter) {
  let initialarray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].toUpperCase() === startletter.toUpperCase()) {
      initialarray.push(array[i]);
    }
  }
  return initialarray;
}

// Invoca la funzione qui e stampa il risultato in console
let sortedarray = sortby(names, letter);
console.log(sortedarray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
// TI DEVI RICORDARE CHE QUANDO FAI RICERCA SULLE STRINGHE è IMPORTANTE LA CAPITALIZZAZIONE DELLE LETTERE
