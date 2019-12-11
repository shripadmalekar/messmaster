const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router =express.Router()

router.get('/',(request,response)=>{
  const connection =db.connect()
  
  const statement=`select * from user`
  connection.query(statement,(error,data)=>{
      connection.end()
      response.send(utils.createResult(error,data))
  })
  
  
})

router.delete('/:userid', (request, response) => {
  const {userid} = request.params
  const connection = db.connect()
  //const statement = `delete from fooditeams where fid = ${fid}`
  const statement = `delete from user where userid = ${userid}`
  connection.query(statement, (error, data) => {

    connection.end()
    response.send(utils.createResult(error, data))
  })
})

router.post('/login',(request,response)=>{
  const{nusername,userpassword}=request.body
  const connection=db.connect()
  const person=[]
  const statement=`select * from user where nusername='${nusername}' and userpassword='${userpassword}'`
  connection.query(statement,(error,person)=>{
    connection.end()
    console.log(person)

    // const person=[]
    if(person.length==0){
      response.send(utils.createResult('Invalid UserName or Password '))
    }
    else{
      const personinfo=person[0]
      const info={
         name:personinfo['nusername'],
        //email:personinfo[email],
         password:personinfo['userpassword']
      }
      response.send(utils.createResult(null,info))
    }

  })
})

router.post('/registration',(request,response)=>{
    const {nusername,email,address,messid,userpassword}=request.body
    const connection =db.connect()
    const statement =`insert into user(nusername,email,address,messid,userpassword)values('${nusername}','${email}','${address}',${messid},'${userpassword}')`
    connection.query(statement,(error,data)=>{
      connection.end()
    response.send(utils.createResult(error,data))
    })
  })

  module.exports=router