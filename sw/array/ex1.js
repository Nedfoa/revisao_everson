//Você tem um array de números:
//const numeros = [5, 10, 15, 20, 25];
//Crie um programa que calcule a soma de todos os elementos do array e exiba o resultado no console.

function soma(n) {
  

  let soma = 0;

  for (let i = 0; i < n.length; i++) {
    soma += n[i];
  }

  return soma;
}

 
export default soma;