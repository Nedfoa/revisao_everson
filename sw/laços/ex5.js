
//Você tem um array de números:
//const numeros = [1, 2, 3, 4, 5];
//Use o método map() para criar um novo array chamado numerosDobrados em que cada elemento seja o dobro do número correspondente do array original. Depois, exiba o novo array no console.

const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(numerosDobrados); // [2, 4, 6, 8, 10]