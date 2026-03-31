import express from 'express';
const router_lacos = express();


import total1 from "../sw/lacos/ex1.js";
import total2 from "../sw/lacos/ex2.js";
import somaTotal from "../sw/lacos/ex3.js";
import nomeMaiusculo from "../sw/lacos/ex4.js";
import numeroDobrado from "../sw/lacos/ex5.js";

router_lacos.post('/soma', (req,res)=>{
    let {soma} = req.body
    res.json({"total": total1(soma)})
})

router_lacos.post('/numerosPares', (req,res)=>{
    let {numeros} = req.body
    res.json({"total:": total2(numeros)})
});

router_lacos.post('/inteiro', (req,res)=>{
    let {inteiro} = req.body
    res.json({"soma total:": somaTotal(inteiro)})
});

router_lacos.post('/maiusculas', (req,res)=>{
    let {capslock} = req.body
    res.json({"nome:": nomeMaiusculo(capslock)})
});

router_lacos.post('/numeros', (req,res)=>{
    let {oDobro} = req.body
    res.json({"dobro:": numeroDobrado(oDobro)})
});

export {router_lacos}