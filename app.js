const exp = require('constants');
const express = require('express')
const app = express();
//using the people array in data,js
let {people} = require ('./data')

//using static asset
app.use(express.static('./methods-public'))

//middleware for form -- parse form data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people})
    console.log(req)
})


//sending through JS
app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        res.status(400).json({success:false, msg:'please provide a value'})
    }
    res.status(201).json({success:true, person:name})
})
//for form logic
app.post('/login',(req,res)=>{
    const {name} = req.body //key provided in the form html
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})

//testing with postman updated  -- adding neew name to the existing names
app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        res.status(400).json({success:false, msg:'please provide a value'})
    }
    res.status(201).json({success:true, data: [...people, name]}) // copy of the original plus new name
})

//put method
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name}= req.body
    console.log(id,name)
    res.send('ok')
})

app.listen(3000,()=>{console.log("This app is listening on port 3000")})