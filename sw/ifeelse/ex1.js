 //Crie uma variável idade e use operador ternário para verificar se a pessoa é maior de idade 
// (18 anos ou mais).
//Se for maior ou igual a 18, a mensagem deve ser "Maior de idade".
//Se for menor que 18, a mensagem deve ser "Menor de idade".
function idade(){ let idade = 17;

let resultado = (idade >= 18) ? ("maior de idade") : ("menor de idade")

 return resultado;
}

console.log(idade())

export default idade;