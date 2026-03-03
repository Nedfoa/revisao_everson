//Crie uma variável idade e use operador ternário para verificar se a pessoa é maior de idade 
// (18 anos ou mais).
//Se for maior ou igual a 18, a mensagem deve ser "Maior de idade".
//Se for menor que 18, a mensagem deve ser "Menor de idade".
let idade = 17;

let resultado = (idade >= 18) ? ("maior de idade") : ("menor de idade")

console.log (resultado);



//Crie uma variável numero e use if-else para mostrar se ele é positivo ou negativo.

let numero = 10;
 if (numero >= 0) {
    console.log ("Seu numero é positivo");
 } else{
    console.log ("seu numero é negativo")
 }

//Crie uma variável idade e use if-else para verificar se a pessoa tem idade suficiente para dirigir.
//A idade mínima é 18 anos.
//Se for 18 ou mais, mostre "Pode dirigir".
//Se for menor que 18, mostre "Não pode dirigir".

let idade = 18;
if (idade >= 17) {
    console.log ("Pode dirigir");
}



//Crie uma variável nota e use if-else composto para classificar a nota do aluno:
//9 ou mais → "Excelente"
//7 a 8.9 → "Bom"
//5 a 6.9 → "Regular"
//Menor que 5 → "Insuficiente"

let nota = 9
if (nota >= 8) {
    console.log ("Exelente");
} else if (nota >= 7) {
    console.log ("Bom");
} else if (nota >= 5) {
    console.log ("regular");
} else {
 console.log ("Insuficiente");
 }
