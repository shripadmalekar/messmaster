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
  const{email,userpassword}=request.body
   console.log('hi')
  const connection=db.connect()
  
  const statement=`select * from user where email='${email}' and userpassword='${userpassword}'`
  connection.query(statement,(error,person)=>{
    connection.end()
    // console.log(person)

    // const person=[]
    if(person.length==0){
      response.send(utils.createResult('Invalid input '))
    }
    else{
      const personinfo=person[0]
      const info={
        userid:personinfo['userid'],
        nusername:personinfo['nusername'],
        messid:personinfo['messid'],
         role:personinfo['role']
         
      }
      response.send(utils.createResult(null,info))
    }

  })
})

router.post('/registration',(request,response)=>{
    const {nusername,email,address,messid,userpassword,roll}=request.body
    const connection =db.connect()
    const statement =`insert into user(nusername,email,address,messid,userpassword,roll)values('${nusername}','${email}','${address}',${messid},'${userpassword}','${roll}')`
    connection.query(statement,(error,data)=>{
      connection.end()
    response.send(utils.createResult(error,data))
    })
  })

  module.exports=router