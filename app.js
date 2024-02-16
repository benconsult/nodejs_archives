const exp = require('constants');
const express = require('express')
const app = express();

//midddleware : req - middle ware - res
app.get('/',(req,res)=>{
    const method = req.method
    const url = req.url
    const time  = new Date().getFullYear()
    console.log(method,url,time);
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})

app.listen(3000,()=>{console.log("This app is listening on port 3000")})