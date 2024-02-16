const exp = require('constants');
const express = require('express')
const app = express();
const morgan = require('morgan')

//3rd party middleware
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
   
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/contact',(req,res)=>{
    res.send('Contact Us')
})
app.get('/api/products',(req,res)=>{
    res.send('My Products')
})
app.listen(3000,()=>{console.log("This app is listening on port 3000")})