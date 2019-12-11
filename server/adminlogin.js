const db = require('./db')
const util = require('./utils')
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
 router.post('/login',(request,response)=>{
   const{username,password}=request.body
   const connection =db.connect()
   const statement =`select * from admin where username='${username}'and password='${password}'`
   connection.query(statement,(error,users)=>{
     connection.end()
     if (users.length ==0)
     {
       console.log('user  dont exists')
     }else{
       console.log('logined')
     }
     response.send('good')
   })
 })
// router.post('/login', (request, response) => {
//   const {username, password} = request.body
//   const encryptedPassword = '' + crypt.MD5(password)
//   const connection = db.connect()
//   const statement = `select * from admin where username = '${username}' and password = '${password}'`
//   connection.query(statement, (error, users) => {
//       connection.end()
      
//       if (users.length == 0) {
//           response.send(util.createResult('user does not exist'))
//       } else {
//           const user = users[0]
//           const info = {
//               username: user['username'],
//               email: user['email']
//           }
//           response.send(util.createResult(null, info))
//       }
//   })
// })

module.exports=router