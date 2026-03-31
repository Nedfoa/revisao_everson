import express from 'express';
const router_operadores = express();

import resposta1 from "../sw/operadores_aritimetico/ex1.js";
import resposta2 from "../sw/operadores_aritimetico/ex2.js";
import resposta3 from "../sw/operadores_aritimetico/ex3.js";
import resposta4 from "../sw/operadores_aritimetico/ex4.js";
import resposta5 from "../sw/operadores_aritimetico/ex5.js";
import resposta6 from "../sw/operadores_aritimetico/ex6.js";
import resposta7 from "../sw/operadores_aritimetico/ex7.js"; 


router_operadores.post('/somaVariaveis', (req,res)=>{
    let {soma, soma2} = req.body
    res.json({"resultado": resposta1(soma, soma2)})
})

router_operadores.post('/diferenca', (req,res)=>{
    let{n1, n2} = req.body
    res.json({"Produtos": resposta2(n1, n2)})
})

router_operadores.post('/produto', (req,res)=>{
    let {num1, num2} = req.body
    res.json({"resultado": resposta3(num1, num2)})
})

router_operadores.post('/divisao', (req,res)=>{
    let{divisor, dividendo}= req.body
    res.json({"resultado": resposta4(dividendo, divisor)})
})

router_operadores.post('/resto', (req,res)=>{
    let { n1, n2} = req.body
    res.json({"resultado": resposta5(n1, n2)})
})

router_operadores.post('/contador', (req,res)=>{
    let {contador} = req.body
    res.json({"resultado": resposta6(contador)})
})

router_operadores.post('/expressao', (req,res)=>{
    let {n1, n2, n3} = req.body
    res.json({"resultado": resposta7(n1, n2, n3)})
})

export {router_operadores}
