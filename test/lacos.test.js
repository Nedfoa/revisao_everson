import total1 from "../sw/lacos/ex1.js";
import total2 from "../sw/lacos/ex2.js";
import somaTotal from "../sw/lacos/ex3.js";
import nomeMaiusculo from "../sw/lacos/ex4.js";
import numeroDobrado from "../sw/lacos/ex5.js";



test ("Testar função laço 1", ()=>{
    let resultado = total1([2, 4, 6, 8, 0])
    expect(resultado).toBe(20)
})

test ("Testar função laço 2", ()=>{
    let resultado = total2(10)
    expect(resultado).toBe(6)
})

test ("testar função laço 3", ()=>{
    let resultado = somaTotal(5)
    expect(resultado).toBe("A soma total é: " + 15)
})

test ("testar função laço 4", ()=>{
    let resultado = nomeMaiusculo(["gabriel, maria, joão"])
    expect(resultado).toStrictEqual(["GABRIEL, MARIA, JOÃO"])
})

test ("testar função laço 5", ()=>{
    let resultado = numeroDobrado([1, 2, 3, 4, 5])
    expect(resultado).toStrictEqual([2, 4, 6, 8, 10])
})