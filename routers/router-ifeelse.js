import express from 'express';
const router_ifeelse = express();

import idade from "../sw/ifeelse/ex1.js"
import suficiente from "../sw/ifeelse/ex2.js";
import notaAluno from "../sw/ifeelse/ex3.js";


router_ifeelse.post('/idade', (req,res)=>{
    let {idadeUser} = req.body

    res.json({"Idade": idade(idadeUser)})

})

router_ifeelse.post('/suficiente', (req,res)=>{
    let {idadeUser} = req.body
    res.json({"Resultado:": suficiente(idadeUser)})
    
});

router_ifeelse.post('/nota', (req,res)=>{

    let {nota2} = req.body
    res.json({"Nota:": notaAluno(nota2)})
});

export {router_ifeelse}


