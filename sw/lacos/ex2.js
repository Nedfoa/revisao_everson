//mostrar todos os numeros pares de 0 até o numero informado
//exibir também quantos números pares foram encontradosno total
//pede um numero ao usuario

function total2(limite) {
    let contador = 0;
    let pares = 0;

    while (contador <= limite) {
        if (contador % 2 === 0) {
            pares++;
        }
        contador++;
    }

    return pares;
}

export default total2;