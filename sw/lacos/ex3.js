// crie um programa que peça ao usuário um número inteiro positivo

function somaTotal(numero) {
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        soma += i;
    }

    return "A soma total é: " + soma;
}

//console.log(somaTotal());

export default somaTotal;