import mostrarProdutos from '../sw/json/produtos.js';


test ("testar função JSON", ()=>{
    let resultado = mostrarProdutos(2)
    expect(resultado).toStrictEqual({
            "nome": "detergente",
            "categoria": "louça",
            "preco": 10.00,
            "quantidade": 5,
            "volume": "500ml"
    
        })
})