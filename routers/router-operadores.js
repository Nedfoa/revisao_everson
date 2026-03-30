import express from 'express';
const router_operadores = express();

import resposta1 from "../sw/operadores_aritimetico/ex1.js";
import resposta2 from "../sw/operadores_aritimetico/ex2.js";
import resposta3 from "../sw/operadores_aritimetico/ex3.js";
import resposta4 from "../sw/operadores_aritimetico/ex4.js";
import resposta5 from "../sw/operadores_aritimetico/ex5.js";
import resposta6 from "../sw/operadores_aritimetico/ex6.js";
import resposta7 from "../sw/operadores_aritimetico/ex7.js"; 


router_operadores.get('/somaVariaveis', (req,res)=>{
    res.json({"resultado": resposta1()})
})

router_operadores.get('/diferenca', (req,res)=>{
    res.json({"Produtos": resposta2()})
})

router_operadores.get('/produto', (req,res)=>{
    res.json({"resultado": resposta3()})
})

router_operadores.get('/divisao', (req,res)=>{
    res.json({"resultado": resposta4()})
})

router_operadores.get('/resto', (req,res)=>{
    res.json({"resultado": resposta5()})
})

router_operadores.get('/contador', (req,res)=>{
    res.json({"resultado": resposta6()})
})

router_operadores.get('/expressao', (req,res)=>{
    res.json({"resultado": resposta7()})
})

export {router_operadores}
