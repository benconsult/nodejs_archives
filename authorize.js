//Another middleware
const authorize =  (req,res,next) =>{
    const {user} = req.query
    if(user === 'John'){
        req.user = {name:'John', age:45}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    
}
module.exports = authorize