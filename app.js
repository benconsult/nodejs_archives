const exp = require('constants');
const express = require('express')
const app = express();

//midddleware : req - middle ware - res
//To log some stuffs on the sending a response
const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time  = new Date().getFullYear()
    console.log(method,url,time);
    //res.send('Hello')
    //alternatively, use next
    next()//the next method
}

app.get('/', logger,(req,res)=>{
   
    res.send('Home')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.listen(3000,()=>{console.log("This app is listening on port 3000")})