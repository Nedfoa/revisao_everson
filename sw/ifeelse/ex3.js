//Crie uma variável nota e use if-else composto para classificar a nota do aluno:
//9 ou mais → "Excelente"
//7 a 8.9 → "Bom"
//5 a 6.9 → "Regular"
//Menor que 5 → "Insuficiente"

function notaAluno(notaEscolar){ 


if (notaEscolar >= 8) {
    return "Exelente";
} else if (notaEscolar >= 7) {
    return "Bom";
} else if (notaEscolar >= 5) {
    return "regular";
} else {
 return "Insuficiente";
 }
}

//console.log(notaAluno())

export default notaAluno;