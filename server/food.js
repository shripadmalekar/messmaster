const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router =express.Router()

router.get('/',(request,response)=>{
    const connection =db.connect()
    //const statement=`select * from fooditeams``
    const statement=`select * from fooditeams`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
    
    
  })
  router.delete('/:foodid', (request, response) => {
    const {foodid} = request.params
    const connection = db.connect()
    //const statement = `delete from fooditeams where fid = ${fid}`
    const statement = `delete from fooditeams where foodid = ${foodid}`
    connection.query(statement, (error, data) => {

      connection.end()
      response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
  const {foodname,foodprice,categoryid} = request.body

  const connection = db.connect()
  //const statement = `insert into fooditeams (fid,foodname, price) values ('${fid}', '${foodname}','${price}')`
  const statement = `insert into fooditeams (foodname,foodprice,categoryid) values ( '${foodname}','${foodprice}','${categoryid}')`
  connection.query(statement, (error, data) => {
      connection.end()
      response.send(utils.createResult(error, data))
  })
})

router.put('/:foodid',(request,response)=>{
  const {foodid} = request.params
  const {foodname,foodprice,categoryid}=request.body
  const connection =db.connect()
   const statement=`update  fooditeams set foodname = '${foodname}',foodprice = '${foodprice}' ,categoryid = '${categoryid}' where foodid=${foodid}`
  connection.query(statement,(error,data)=>{
      connection.end()
      response.send(utils.createResult(error,data))
  })
})
  
    module.exports=router