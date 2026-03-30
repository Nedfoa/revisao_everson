import express from 'express';
const router_lacos = express();


import total1 from "../sw/lacos/ex1.js";
import total2 from "../sw/lacos/ex2.js";
import somaTotal from "../sw/lacos/ex3.js";
import nomeMaiusculo from "../sw/lacos/ex4.js";
import numeroDobrado from "../sw/lacos/ex5.js";

router_lacos.get('/soma', (req,res)=>{
    res.json({"total": total1()})
})

router_lacos.get('/numerosPares', (req,res)=>{
    res.json({"total:": total2()})
});

router_lacos.get('/inteiro', (req,res)=>{
    res.json({"soma total:": somaTotal()})
});

router_lacos.get('/maiusculas', (req,res)=>{
    res.json({"nome:": nomeMaiusculo()})
});

router_lacos.get('/numeros', (req,res)=>{
    res.json({"dobro:": numeroDobrado()})
});

export {router_lacos}