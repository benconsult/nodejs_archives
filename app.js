const exp = require('constants');
const express = require('express')
const {products} = require('./data')

const app = express();
//JSON BASICS
app.get('/', (req,res)=>{
  res.json(products)//array of objects -- produxts from data.js
   })



app.listen(3000,()=>{console.log("Thisa app is listening on port 5000")})