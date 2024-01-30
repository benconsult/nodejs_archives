const exp = require('constants');
const express = require('express')
const {products} = require('./data')

const app = express();

//route parameters from home page
app.get('/', (req,res)=>{
  res.send('<h1>Home</h1><a href="/api/products">Go to products page</a>')
   })

//product page with limited data
app.get('/api/products', (req,res)=>{
    //iterate over the products
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id, name, image}
    })//ends map function
    res.json(newProducts)
})

app.listen(3000,()=>{console.log("Thisa app is listening on port 5000")})