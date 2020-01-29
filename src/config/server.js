const bodyParser=require('body-parser')
const express=require('express')
require('dotenv').config()

const port=process.env.PORT_SERVER

const server=express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port,()=>{
    console.log(`Servidor online na porta: ${port}`)
})