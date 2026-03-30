import express from 'express';
const router_arrays = express();


import soma from '../sw/array/ex1.js';
import maiorNumero from '../sw/array/ex2.js';

router_arrays.post('/somaarrays', (req,res)=>{
    let {numeros} = req.body


    res.json({"Soma": soma(numeros)})
})

router_arrays.get('/maiornumero', (req,res)=>{
    res.json({"maior número:": maiorNumero()})
});

export {router_arrays}