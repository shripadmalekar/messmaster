const db =require('./db')
const utils = require('./utils')
const express = require('express')
 const router =express.Router()
  
 router.get('/',(require,response)=>{ 
     const connection =db.connect()
     const statement =''
     connection.query(statement,(error,data)=>{
         connection.end()
         response.send(utils.createResult(error,data))  
     })
 })