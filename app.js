const exp = require('constants');
const express = require('express');
const { resourceUsage } = require('process');
const app = express();
const peopleRouter = require('./routes/people') 
const authRouter = require('./routes/auth') 

//using static asset
app.use(express.static('./methods-public'))

//middleware for form -- parse form data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

//middlwware for router - api.people is the base path or url
//step 1, create a router folder with routes 2, import the router lib 3, declare the base url or path as middleware
app.use('/api/people', peopleRouter)
app.use('/login', authRouter )

//for form logic


app.listen(3000,()=>{console.log("This app is listening on port 3000")})