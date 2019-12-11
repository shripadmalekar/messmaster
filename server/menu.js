const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router =express.Router()

router.get('/',(request,response)=>{
    const connection =db.connect()
     const statement=`select ms.messname,ms.messowner,m.foodname,m.menuprice,m.menudate from menu m inner join mess ms on m.messid=ms.messid`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/:messid',(request,response)=>{
    const {menudate,foodname,menuprice}=request.body
    const {messid} = request.params
    const connection =db.connect()
    const statement =`insert into menu(messid,menudate,foodname,menuprice)values('${messid}','${menudate}','${foodname}',${menuprice})`
    connection.query(statement,(error,data)=>{
      connection.end()
    response.send(utils.createResult(error,data))
    })
  })

router.get('/:messid',(request,response)=>{
    const {messid} = request.params
    const connection =db.connect()
     const statement=`select ms.messname,m.foodname,m.menuprice,m.menudate from menu m inner join mess ms on m.messid=ms.messid where ms.messid= ${messid}`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.put('/:menuid',(request,response)=>{
    const {menuid} = request.params
    const {foodname,menuprice}=request.body
    const connection =db.connect()
     const statement=`update  menu set foodname = '${foodname}',menuprice = '${menuprice}' where menuid = '${menuid}'`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

  module.exports=router