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

//req.params
app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find(
        (product)=> product.id === Number(productID)
        )
    if(!singleProduct){
        return res.status(404).send("Page does not exist")
      }

        return res.json(singleProduct)
})
//http://localhost:3000/api/v1/query?search=a&limit=2
app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query
    let sortedProducts = [...products];//copied the array products
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
       // res.status(200).send("No products matched your search")
       //Alternatively 
       return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})
app.listen(3000,()=>{console.log("This app is listening on port 3000")})