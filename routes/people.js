// router
const express = require('express')
const router = express.Router()
let {people} = require ('../data')  // array in people - data.js

router.get('/', (req, res)=>{
    res.status(200).json({success:true, data:people})
    console.log(req)
})


//sending through JS
router.post('/',(req,res)=>{
    const {name} = req.body
    if(!name){
        res.status(400).json({success:false, msg:'please provide a value'})
    }
    res.status(201).json({success:true, person:name})
})


//testing with postman updated  -- adding neew name to the existing names
router.post('/postman',(req,res)=>{
    const {name} = req.body
    if(!name){
        res.status(400).json({success:false, msg:'please provide a value'})
    }
    res.status(201).json({success:true, data: [...people, name]}) // copy of the original plus new name
})

//put method
router.put('/:id',(req,res)=>{
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
router.delete('/:id', (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res.status(400).json({success:false, msg:`no person with id ${req.params.id}`})
    }
    //new array without the person found with the id above
const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
 return res.status(200).json({success:true, data: newPeople})
})

module.exports = router