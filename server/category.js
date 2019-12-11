const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router =express.Router()

router.get('/',(request,response)=>{
    const connection =db.connect()
    
    const statement=`select * from category`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
    
    
  })
  router.delete('/:categoryid', (request, response) => {
    const {categoryid} = request.params
    const connection = db.connect()
    
    const statement = `delete from category where categoryid = ${categoryid}`
    connection.query(statement, (error, data) => {

      connection.end()
      response.send(utils.createResult(error, data))
    })
})
router.post('/', (request, response) => {
    const {categoryname} = request.body
  
    const connection = db.connect()
    
    const statement = `insert into category (categoryname) values ( '${categoryname}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
  })
  router.put('/:categoryid',(request,response)=>{
    const {categoryid} = request.params
    const {categoryname}=request.body
    const connection =db.connect()
     const statement=`update  category set categoryname = '${categoryname}' where categoryid=${categoryid}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
  })

module.exports=router