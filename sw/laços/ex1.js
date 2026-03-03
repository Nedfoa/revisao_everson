//Peça ao usuário números inteiros.
//Some esses números.
//Continue pedindo até que o usuário digite 0.
//No final, mostre a soma total dos números digitados (sem contar o 0)

let numero;
let soma = 0;

do {
    numero = Number(prompt("Digite um número (0 para sair):"));
    soma += numero;
} while (numero !== 0);

console.log("A soma total é:", soma);


