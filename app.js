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
    //check if the person exist
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(400).json({success:false, msg:`no person with id ${id}`})
    }
    //loop theough the people array
  const newPeople = people.map((person)=>{
    if(person.id === Number(id)){
        person.name = name
    }
    return person
  })
    res.status(200).json({success:true, data: newPeople})
})

//delete
app.delete('/api/people/:id', (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res.status(400).json({success:false, msg:`no person with id ${req.params.id}`})
    }
    //new array without the person found with the id above
const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
 return res.status(200).json({success:true, data: newPeople})
})

app.listen(3000,()=>{console.log("This app is listening on port 3000")})