// crie um programa que peça ao usuário um número inteiro positivo e some todos os numeros até o informado

function somaTotal(numero) {
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        soma += i;
    }

    return "A soma total é: " + soma;
}

//console.log(somaTotal());

export default somaTotal;