
//Você tem um array de números:
//const numeros = [1, 2, 3, 4, 5];
//Use o método map() para criar um novo array chamado numerosDobrados em que cada elemento seja o dobro do número correspondente do array original. Depois, exiba o novo array no console.

function numeroDobrado() {
  const numero = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return numero.map ((numero)=> numero * 2);
}

console.log(numeroDobrado())

export default numeroDobrado;