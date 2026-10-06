const {exec} = require("child_process")

exec("node temp.js",(error,stdout,stderr)=>{
    if(error){
        console.log(error.message)
        return
    }
    if(stderr){
        console.log(stderr.message)
        return
    }
    console.log("Output is ",stdout)
})