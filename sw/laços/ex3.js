// crie um programa que peça ao usuário um número inteiro positivo

let numero = parseInt (prompt("Digite um número inteiro positivo: "));

let soma = 0;

for (let i = 1; i <= numero; i++)  {
    soma += i;
}

console.log("a soma total é:", soma)