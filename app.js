const exp = require('constants');
const express = require('express')
const app = express();
//using the people array in data,js
let {people} = require ('./data')

//using static asset
app.use(express.static('./methods-public'))

app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people})
    console.log(req)
})


app.listen(3000,()=>{console.log("This app is listening on port 3000")})