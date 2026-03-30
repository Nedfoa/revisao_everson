//Você tem o seguinte array de números:
//const numeros = [12, 45, 7, 34, 99, 23];
//Crie um programa que encontre o maior número do array e exiba-o no console.

function maiorNumero() {
  const numeros = [12, 45, 7, 34, 99, 23];

  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

console.log(maiorNumero())


export default maiorNumero;