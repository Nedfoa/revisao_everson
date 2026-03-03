//mostrar todos os numeros pares de 0 até o numero informado
//exibir também quantos números pares foram encontradosno total

//pede um numero ao usuario
let numero = paserInt(promt("Digite um número inteiro positivo"));

let contador = 0;
let pares = 0;

while (contador <= numero) {
    
    //verificar se é par
    if (contador % 2 === 0) {
        console.log(contador);
        pares++;
    }
    contador++;
}
console.log("total de números pares:", pares);