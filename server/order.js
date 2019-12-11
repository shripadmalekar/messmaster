const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router =express.Router()

router.get('/',(request,response)=>{
    const connection =db.connect()
    
    const statement=`select o.orederid,u.nusername,m.foodname,m.menuprice,m.menudate,me.messname from orders o 
    inner join user u on o.userid=u.userid
    inner join menu m on o.menuid=m.menuid
    inner join mess me on o.messid=me.messid`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
    
    
  })
  router.get('/:messid',(request,response)=>{
    const {messid} = request.params
    const connection =db.connect()
     const statement=`select o.orederid,u.nusername,m.foodname,m.menuprice,m.menudate,me.messname from orders o 
     inner join user u on o.userid=u.userid
     inner join menu m on o.menuid=m.menuid
     inner join mess me on o.messid=me.messid where me.messid='${messid}'`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


module.exports=router