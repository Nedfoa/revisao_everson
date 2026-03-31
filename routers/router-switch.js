import express from 'express';
const router_switch = express();

import resposta from '../sw/switch/switch.js';



router_switch.post('/diaSemana', (req,res)=>{
    let {diaSemana} = req.body
    res.json({"Dia da semana:": resposta(diaSemana)})
})



export {router_switch}


