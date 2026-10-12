const EventEmitter = require("events")
const emitter = new EventEmitter()
const fs = require("fs")


emitter.on("error",(error)=>{
    fs.writeFile("error.txt",`${error}`,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("file writed")
    })
})

emitter.emit("error","SomethingWent wrong")