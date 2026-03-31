import express from 'express';
const router_json = express();

import mostrarProdutos from '../sw/json/produtos.js';

router_json.post('/produtos', (req,res)=>{
    let {numeroProduto} = req.body
    res.json({"Produtos": mostrarProdutos(numeroProduto)})
})

export {router_json}
