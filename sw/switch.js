//Crie uma variável chamada dia que recebe um número de 1 a 7. Use um switch para exibir no console o nome do dia da semana correspondente:
//1 → Domingo
//2 → Segunda-feira
//3 → Terça-feira
//4 → Quarta-feira
//5 → Quinta-feira
//6 → Sexta-feira
//7 → Sábado
//Se o número for diferente de 1 a 7, exiba "Dia inválido".


const dia = 3;

switch(dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}