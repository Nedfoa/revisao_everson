//Crie uma variável contador = 10.
//Aumente em 1 usando incremento.
//Depois diminua em 1 usando decremento.
//Exiba cada resultado no console.

function resposta6() {
    let contador = 10;

    contador++; // 11
    const incremento = contador;

    contador--; // volta pra 10
    const decremento = contador;

    return {
        incremento,
        decremento
    };
}

export default resposta6;