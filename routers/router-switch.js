import express from 'express';
const router_switch = express();

import resposta from '../sw/switch/switch.js';



router_switch.get('/diaSemana', (req,res)=>{
    res.json({"Dia da semana:": resposta()})
})



export {router_switch}


