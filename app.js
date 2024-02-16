const exp = require('constants');
const express = require('express')
const app = express();
const logger = require('./logger')

//midddleware : req - middle ware - res
//To log some stuffs on the sending a response

app.get('/', logger,(req,res)=>{
   
    res.send('Home')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.listen(3000,()=>{console.log("This app is listening on port 3000")})