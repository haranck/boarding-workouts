const express = require('express')
const app = express()

app.get("/",(req,res,next)=>{
    try {
        // throw new Error("Something Went Wrong")        
        // throw new SyntaxError("Invalid Json")
        // throw new TypeError("Age is must be a number")
        // throw new ReferenceError("user is not defined")
        res.json(kkk)
    } catch (error) {
        next(error)
    }
})

app.get("/validation",(req,res,next)=>{
    next({
        name:"validation error",
        message:"email required"
    })
})


app.use((err,req,res,next)=>{

    if(err instanceof ReferenceError){
        return res.status(400).json({success:false,error:"ReferanceError",message:err.message})
    }
    if(err instanceof TypeError){
        return res.status(400).json({success:false,error:"TypeError",message:err.message})
    }
    if(err instanceof SyntaxError){
        return res.status(400).json({success:false,error:"SyntaxError",message:err.message})
    }
    ///
    if(err.name === "ValidationError"){
        return res.status(400).json({success:false,error:err.name,message:err.message})
    }

    return res.status(500).json({success:false,error:"internal Server Error",message:err.message})
})


app.listen(3000,()=>console.log("server running on port 3000"))
