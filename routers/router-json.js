import express from 'express';
const router_json = express();

import mostrarProdutos from '../sw/json/produtos.js';

router_json.get('/produtos', (req,res)=>{
    res.json({"Produtos": mostrarProdutos()})
})

export {router_json}
