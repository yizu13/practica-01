

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors'); 
const Port = 3000
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send('hola estoy en linea')
})

app.listen(Port, ()=>{
    console.log(`servido escuchando en el puerto http://localhost:${Port}`)
})