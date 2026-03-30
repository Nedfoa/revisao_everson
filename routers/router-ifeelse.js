import express from 'express';
const router_ifeelse = express();

import idade from "../sw/ifeelse/ex1.js"
import suficiente from "../sw/ifeelse/ex2.js";
import notaAluno from "../sw/ifeelse/ex3.js";


router_ifeelse.get('/idade', (req,res)=>{
    res.json({"Idade": idade()})
})

router_ifeelse.get('/suficiente', (req,res)=>{
    res.json({"Resultado:": suficiente()})
});

router_ifeelse.get('/nota', (req,res)=>{
    res.json({"Nota:": notaAluno()})
});

export {router_ifeelse}


