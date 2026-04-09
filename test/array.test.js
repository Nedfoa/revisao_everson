import soma from '../sw/array/ex1.js';
import maiorNumero from '../sw/array/ex2.js';

test ( "testar função array 1", ()=>{
    let resultado = soma([5, 10, 15, 20, 25])
    expect(resultado).toBe(75)

})

test("testar função array 2", ()=>{
    let resultado = maiorNumero([12, 45, 7, 34, 99, 23])
    expect(resultado).toBe(99)
})