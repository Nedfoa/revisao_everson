//Crie uma variável chamada dia que recebe um número de 1 a 7. Use um switch para exibir no console o nome do dia da semana correspondente:
//1 → Domingo
//2 → Segunda-feira
//3 → Terça-feira
//4 → Quarta-feira
//5 → Quinta-feira
//6 → Sexta-feira
//7 → Sábado
//Se o número for diferente de 1 a 7, exiba "Dia inválido".


function resposta() {
    const dia = 3;

    switch(dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}

console.log(resposta());

export default resposta;