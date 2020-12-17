// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// dovrei creare un ciclo for che mi inserisca i numeri in un array e dopo fare degli if dirgli se sono divisibilI per 3 o per 5

// la variabile lista numeri si popola con il ciclo for partendo dalla variabile lista che è uguale a 0

var listaNumeri = [];
var lista = 0;


for (var i = 0; i < 100; i++) {
  lista += listaNumeri[i];
}
 if ( listaNumeri[i] % 3 === 0  ) {
  console.log('Fizz');
}
else if (listaNumeri[i] % 5 === 0 ) {
  console.log('Buzz')
}
 else (listaNumeri[i] % 5 === 0 && listaNumeri[i] % 3 === 0) {
  console.log('FizzBuzz');
 }
