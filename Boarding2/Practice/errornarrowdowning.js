const express = require("express");
const app = express();

app.get("/",(req, res,next) => {
    try {
        // throw new TypeError("its a typeError")
        // throw new ReferenceError("its not defined")
        throw new SyntaxError("its not defined")
    } catch (error) {
        next(error)
    }
});

app.use((err,req,res,next)=>{
    if(err instanceof SyntaxError){
        res.status(500).json({success:false,error:"SyntaxError",message:err.message})
    }
    if(err instanceof TypeError){
        res.status(400).json({success:false,error:"TypeError",message:err.message})
    }
    if(err instanceof ReferenceError){
        res.status(400).json({success:false,error:"RefrenceError",message:err.message})
    }
    if(err instanceof Error){
        res.status(500).json({success:false,error:"Error",message:err.message})
    }

    res.status(500).json({success:false,error:"Unknown Error",message:err})
})

app.listen(3000, () => console.log("server running or port 3000"));
