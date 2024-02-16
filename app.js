const exp = require('constants');
const express = require('express')
const app = express();
const logger = require('./logger')

//midddleware : req - middle ware - res
//middleware simplified with app.use()
app.use(logger)

app.get('/',(req,res)=>{
   
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/contact',(req,res)=>{
    res.send('Contact Us')
})

app.listen(3000,()=>{console.log("This app is listening on port 3000")})