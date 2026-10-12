const express = require("express")
const app = express()


app.use((req,res,next)=>{
    if(req.method === "GET"){
        throw new Error("Get requests are not allowd")
    }

    let start = new Date()
    let end = new Date()
    start.setHours(13,0,0,0)
    end.setHours(14,0,0,0)

    let now =  new Date().getHours()

    if(now > start && now < end){
        throw new Error(" 1 to 2 request is not allowd")
    }
    next()

})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>console.log('server is running 3000'))