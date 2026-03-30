//Peça ao usuário números inteiros.
//Some esses números.
//Continue pedindo até que o usuário digite 0.
//No final, mostre a soma total dos números digitados (sem contar o 0)

function total1() {
    let numeros = [5, 3, 2, 0];
    let soma = 0;
    let i = 0;
    let numero;
    
    do {
        numero = numeros[i];
        
        if (numero !== 0) {
            soma += numero;
        }
    
        i++;
    } while (numero !== 0);
    
    return "A soma total é:", soma;
}

console.log(total1())

export default total1;
