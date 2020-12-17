// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// dovrei creare un ciclo for che mi inserisca i numeri in un array e dopo fare degli if dirgli se sono divisibilI per 3 o per 5

// la variabile lista numeri si popola con il ciclo for partendo dalla variabile lista che è uguale a 0

// non aveva senso inserire un array vuoto perche gia il ciclo for conteneva le istruzioni per incrementare i numeri con la i

// var listaNumeri = [];
// var lista = 0;


for (var i = 1; i < 100; i++) {
  // listaNumeri.push(i);
  // il ciclo for mi dice che partendo da uno ogni ciclo deve incrementare di uno fino a 100 quindi posso considerare la mia i come un numero che ogni volta si va incrementando

if ( i % 5 === 0 && i % 3 === 0) {
  console.log('FizzBuzz');
}

else if (i % 5 === 0 ) {
  console.log('Buzz');
}

else if (i % 3 === 0) {
  console.log('Fizz');
}

 else {
   console.log(i);
 }

}
// l ultima istruzione else dice che se non è divisibile per 3 o per 5 o per entrambe  stampa direttamente il numero
