function mostrarProdutos (){
    const produtos = [
        {
            "nome": "vanish",
            "categoria": "roupa",
            "preco": 12.00,
            "quantidade": 2,
            "volume": "100mg"
    
        },
        {
            "nome": "amaciante",
            "categoria": "roupa",
            "preco": 30.00,
            "quantidade": 4,
            "volume": "1L"
    
        },
        {
            "nome": "detergente",
            "categoria": "louça",
            "preco": 10.00,
            "quantidade": 5,
            "volume": "500ml"
    
        },
        {
            "nome": "cândida",
            "categoria": "limpeza",
            "preco": 16.00,
            "quantidade": 1,
            "volume": "1L"
    
        },
        {
            "nome": "odorizante",
            "categoria": "limpeza",
            "preco": 10.00,
            "quantidade": 2,
            "volume": "100mg"
    
        }
    ]
    return produtos;
}

console.log(mostrarProdutos())

export default mostrarProdutos;

