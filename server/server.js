const express = require('express')
const bodyParser =require('body-parser')
const adminrouter=require('./adminlogin')
const userrouter=require('./personinfo')
const foodrouter=require('./food')
const menurouter=require('./menu')
const orderrouter=require('./order')
const categoryrouter=require('./category')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json())
app.use('/adminLogin',adminrouter)
app.use('/personinfo',userrouter)
app.use('/food',foodrouter)
app.use('/menu',menurouter)
app.use('/order',orderrouter)
app.use('/category',categoryrouter)

app.listen(5000,'0.0.0.0',()=>{
    console.log('server started on port 5000')
})