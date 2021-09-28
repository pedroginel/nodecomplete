const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

const port = process.env.PORT

app.get('/users',(req,res)=>{
    res.send("Pegaste bien")
})
app.post('/users',(req,res)=>{
    console.log(req.body)
    let usuario = req.body.nombre
    res.send(`Recimos el usuario`)
})

app.listen(port,()=>{
    console.log(`Estamos escuchando el puerto ${port}`)
})