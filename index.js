import express from "express"

const app = express()
const door = 8000
app.use (express.json())

app.use(express.Router())

app.get('/', (req, res)=>{
    res.send("teste")
})



import { router_arrays } from "./routers/router-arrays.js"
import { router_ifeelse } from "./routers/router-ifeelse.js"
import { router_lacos } from "./routers/router-lacos.js"
import { router_json } from "./routers/router-json.js"
import { router_operadores } from "./routers/router-operadores.js"
import { router_switch } from "./routers/router-switch.js"



app.use("/arrays", router_arrays)
app.use("/ifeelse", router_ifeelse)
app.use("/lacos", router_lacos)
app.use("/json", router_json)
app.use("/operadores", router_operadores)
app.use("/switch", router_switch)





app.listen(door, ()=>{
    console.log(`O servidor está aberto na porta ${door}`)
})