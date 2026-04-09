import idade from "../sw/ifeelse/ex1.js"
import suficiente from "../sw/ifeelse/ex2.js";
import notaAluno from "../sw/ifeelse/ex3.js";

test ("testar função if e else 1", ()=>{
    let resultado = idade(14)
    expect(resultado).toBe("menor de idade")
})


test ("testar função if e else 2", ()=>{
    let resultado = suficiente(14)
    expect(resultado).toBe("não pode dirigir")
})

test ("Testar função if e else 3", ()=>{
    let resultado = notaAluno(7)
    expect(resultado).toBe("Bom")
})