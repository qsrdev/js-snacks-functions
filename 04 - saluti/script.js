/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.

const saluta = (string) => {
  console.log(`ciao ${string}`);
};

// Invoca la funzione qui e stampa il risultato in console
let greet = saluta(name);

//Risultato atteso se si passa 'Mario': // ciao Mario
