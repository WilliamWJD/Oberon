const bodyParser=require('body-parser')
const express=require('express')
const queryParser=require('express-query-int')
require('dotenv').config()

const allowCors=require('../config/cors')

const port=process.env.PORT_SERVER

const server=express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port,()=>{
    console.log(`Servidor online`)
})

module.exports=server