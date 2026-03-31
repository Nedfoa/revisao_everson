import express from 'express';
const router_arrays = express();


import soma from '../sw/array/ex1.js';
import maiorNumero from '../sw/array/ex2.js';

router_arrays.post('/somaarrays', (req,res)=>{
    let {numeros} = req.body


    res.json({"Soma": soma(numeros)})
})

router_arrays.post('/maiornumero', (req,res)=>{

    let  {numeros} = req.body
    res.json({"maior número:": maiorNumero(numeros)})


});

export {router_arrays}