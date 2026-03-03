//Você tem o seguinte array de números:
//const numeros = [12, 45, 7, 34, 99, 23];
//Crie um programa que encontre o maior número do array e exiba-o no console.

const numeros = [12, 45, 7, 34, 99, 23];

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console.log("O maior número é:", maior);