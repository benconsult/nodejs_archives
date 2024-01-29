const exp = require('constants');
const express = require('express')
const path = require('path')

const app = express();
app.use(express.static('./public'));//to display static files

app.get('/', (req,res)=>{
    //Alternative 2
    //res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))//path method
})



app.listen(5000,()=>{console.log("Thisa app is listening on port 5000")})