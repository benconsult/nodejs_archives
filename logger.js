//middlewarre in a separatte file
const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time  = new Date().getFullYear()
    console.log(method,url,time);
    //res.send('Hello')
    //alternatively, use next
    next()//the next method
}

module.exports = logger