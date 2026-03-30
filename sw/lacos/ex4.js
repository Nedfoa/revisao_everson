//Você tem um array de nomes de pessoas:
//const nomes = ["Ana", "Bruno", "Carla", "Diego"];
//Use o método forEach() para exibir cada nome em maiúsculas no console.

function nomeMaiusculo() {
  const nomes = ["Ana", "Bruno", "Carla", "Diego"];

  return nomes.map((nome) => nome.toUpperCase());
}

console.log(nomeMaiusculo())

export default nomeMaiusculo;