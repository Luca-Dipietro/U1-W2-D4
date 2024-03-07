/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  const areaRettangle = l1 * l2;
  return "L'area del rettangolo è " + areaRettangle;
};
console.log(area(5, 16));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  const sum = n1 + n2;
  if (n1 === n2) {
    return "Essendo medesimi tra loro la loro somma è " + sum * 3;
  } else {
    return "La somma tra i valori è " + sum;
  }
};
console.log(crazySum(1, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  const diffAbsolute = Math.abs(n1 - 19);
  if (n1 < 19) {
    return (
      "La differenza assoluta, con il numero fornito minore di 19, è " +
      diffAbsolute
    );
  } else {
    return (
      "La differenza assoluta, con il numero fornito maggiore di 19, è " +
      diffAbsolute * 3
    );
  }
};
console.log(crazyDiff(25));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(200));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE " + string;
  }
};
console.log(epify("EPICODE School"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n < 0) {
    return n + " è un numero negativo";
  }
  if (n % 3 === 0) return n + " è un multiplo di 3";
  else if (n % 7 === 0) {
    return n + " è un multiplo di 7";
  } else {
    return n + " non è multiplo di 3 e di 7";
  }
};
console.log(check3and7(33));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (string) {
  const splitString = string.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
};
console.log(reverseString("Epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (string) {
  const splitString = string.split(" ");
  if (splitString.length <= 1) {
    return "La stringa deve avere più di una parola";
  }
  let returnString = "";
  for (let i = 0; i < splitString.length; i++) {
    returnString +=
      splitString[i].substring(0, 1).toUpperCase() +
      splitString[i].substring(1) +
      " ";
  }
  return returnString;
};
console.log(upperFirst("ciao"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string) {
  return string.slice(1, -1);
};
console.log(cutString("Epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let arrayNumbers = [];
  for (let i = 0; i < n; i++) {
    arrayNumbers.push(Math.floor(Math.random() * 10));
  }
  return arrayNumbers;
};
console.log(giveMeRandom(4));
