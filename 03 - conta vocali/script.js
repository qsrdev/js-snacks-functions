/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

// function vowelCount(string) {
//   const vowels = "aeiou";
//   let contavocali = 0;
//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
//     if (vowels.includes(string[i])) {
//       contavocali++;
//     }
//   }
//   return contavocali;
// }

const vowelCount = (string) => {
  const vowels = "aeiou";
  let contavocali = 0;
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (vowels.includes(string[i])) {
      contavocali++;
    }
  }
  return contavocali;
};

// Invoca la funzione qui e stampa il risultato in console

let numerovocali = vowelCount(word);
console.log(numerovocali);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
