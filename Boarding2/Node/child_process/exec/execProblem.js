const express = require("express")
const app = express()
const {exec} = require("child_process")
const fs = require('fs')

app.get('/exec',(req,res)=>{

    exec('pwd',(error,stdout,stderr)=>{
        if(error){
            console.log("error ",error)
            return
        }
        if(stderr){
            console.log('stderr ',stderr)
            return
        }
        console.log("output ",stdout)
        fs.writeFile("exec.txt",`${stdout}`,(err)=>{
            if(err) throw new Error("Something went wrong")
            console.log('file writed ')
        })
        res.send(stdout)
    })
 
})

app.listen(3000,()=>console.log('server running on port 3000'))