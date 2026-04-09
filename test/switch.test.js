import resposta from '../sw/switch/switch.js';

test ("Testar função switch", ()=>{
    let resultado = resposta(2)
    expect(resultado).toBe("Segunda-feira")
})