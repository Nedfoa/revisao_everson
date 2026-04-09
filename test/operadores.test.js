import resposta1 from "../sw/operadores_aritimetico/ex1.js";
import resposta2 from "../sw/operadores_aritimetico/ex2.js";
import resposta3 from "../sw/operadores_aritimetico/ex3.js";
import resposta4 from "../sw/operadores_aritimetico/ex4.js";
import resposta5 from "../sw/operadores_aritimetico/ex5.js";
import resposta6 from "../sw/operadores_aritimetico/ex6.js";
import resposta7 from "../sw/operadores_aritimetico/ex7.js"; 


test ("testar funções operadores 1", ()=>{
    let resultado = resposta1(2, 2)
    expect(resultado).toBe(4)
})


test ("testar funções operadores 2", ()=>{
    let resultado = resposta2(2, 2)
    expect(resultado).toBe(0)
})


test ("testar funções operadores 3", ()=>{
    let resultado = resposta3(2, 2)
    expect(resultado).toBe(4)
})


test ("testar funções operadores 4", ()=>{
    let resultado = resposta4(2, 2)
    expect(resultado).toBe(1)
})


test ("testar funções operadores 5", ()=>{
    let resultado = resposta5(10, 3)
    expect(resultado).toBe(1)
})


test ("testar funções operadores 6", ()=>{
    let resultado = resposta6(10)
    expect(resultado).toStrictEqual({"decremento": 10, "incremento": 11})
})


test ("testar funções operadores 7", ()=>{
    let resultado = resposta7(5, 5, 6)
    expect(resultado).toBe(58)
})


