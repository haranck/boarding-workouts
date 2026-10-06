const express = require("express");
const app = express();
const EventEmitter = require("events")
const emitter = new EventEmitter()
const crypto = require("crypto")
const fs = require('fs')

let algorithm = 'aes-256-cbc'
let key = crypto.randomBytes(32)
let iv = crypto.randomBytes(16)

emitter.on("error",(error)=>{

    let cipher = crypto.createCipheriv(algorithm,key,iv)
    let encrypted = cipher.update(error,"utf-8",'hex') + cipher.final("hex")

    fs.appendFile("encryptedError.txt",`Error : ${encrypted} , Time : ${new Date().getHours()}:${new Date().getMinutes()} \n\n`,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("error encrypted and file appended")
    })

    let decipher = crypto.createDecipheriv(algorithm,key,iv)
    let decrypted = decipher.update(encrypted,"hex","utf8")+decipher.final("utf8")

    fs.appendFile("decryptedErrors.txt",`Error : ${decrypted} , Time : ${new Date().getHours()}:${new Date().getMinutes()} \n\n`,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("error decrypted and file appended")
    })
})


app.get("/",(req,res)=>{
    try {
        throw new SyntaxError("Syntax Error")
    } catch (error) {
        if(error instanceof SyntaxError){
            emitter.emit("error",error.message)
        }
    }
})

app.listen(3000, () => console.log("server running or port 3000"));