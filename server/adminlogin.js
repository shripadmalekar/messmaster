const db = require('./db')
const utils = require('./utils')
const express = require('express')
const crypt = require('crypto-js')

 const router =express.Router()
 router.get('/',(request,response)=>{
     const connection =db.connect()
     const statement =`select name,email,password from personinfo`
     connection.query(statement,(error,data)=>{
         connection.end()
         //console.log(data)      
         const users= []
        
         for(let index =0; index < data.length; index++)
          {
              const personinfo = data[index]
             users.push({
                        username:personinfo['name'],
                        email:personinfo['email'],
                        password:personinfo['password']
                        })
            // users.push({})
          }
         response.send(util.createResult(error,users))
              
     })
 })
 
router.post('/registration',(request,response)=>{
  
  const connection =db.connect()
  const {messname,email,messaddress,messpassword,messowner,messcontact,longitude,latitude,role}=request.body
  const statement =`insert into mess(messname,email,messaddress,messowner,messcontact,messpassword,longitude,latitude,role)values('${messname}','${email}','${messaddress}','${messowner}','${messcontact}','${messpassword}','${longitude}','${latitude}','${role}')`
  connection.query(statement,(error,data)=>{
    connection.end()
  response.send(utils.createResult(error,data))
  })
})

 router.post('/login',(request,response)=>{
  const{email,messpassword}=request.body
   console.log('hi')
  const connection=db.connect()
  
  const statement=`select * from mess where email='${email}' and messpassword='${messpassword}'`
  connection.query(statement,(error,owner)=>{
    connection.end()
    // console.log(owner)

    // const owner=[]
    if(owner.length==0){
      response.send(utils.createResult('Invalid input '))
    }
    else{
      const ownerinfo=owner[0]
      const info={
        messid:ownerinfo['messid'],
        messname:ownerinfo['messname'],
        role:ownerinfo['role']
         
      }
      response.send(utils.createResult(null,info))
    }

  })
})

module.exports=router