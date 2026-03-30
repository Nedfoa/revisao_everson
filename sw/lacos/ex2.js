//mostrar todos os numeros pares de 0 até o numero informado
//exibir também quantos números pares foram encontradosno total
//pede um numero ao usuario

function total2() {
    let contador = 0;
    let pares = 0;

    while (contador <= pares) {

        
        if (contador % 2 === 0) {
            console.log(contador);
            pares++;
        }

        contador++;
    }

    return "Total de números pares:", pares;
}

console.log(total2())

export default total2;