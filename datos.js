const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors'); 
const contactos = require('./server');
const Port = 5000
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.status(200).send({info: contactos})
})

app.listen(Port, ()=>{
    console.log(`servido escuchando en el puerto: ${Port}`)
})