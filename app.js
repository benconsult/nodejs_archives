const exp = require('constants');
const express = require('express')
const app = express();
//using the people array in data,js
let {people} = require ('./data')

//using static asset
app.use(express.static('./methods-public'))

//middleware for form -- parse form data
app.use(express.urlencoded({extended:false}))

app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people})
    console.log(req)
})

//for form logic
app.post('/login',(req,res)=>{
    const {name} = req.body //key provided in the form html
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})

app.listen(3000,()=>{console.log("This app is listening on port 3000")})