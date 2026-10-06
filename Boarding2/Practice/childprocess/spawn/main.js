const {spawn} = require("child_process")

const child = spawn('node',['child.js',"Haran",23])

child.stdout.on("data",(data)=>{
    console.log("Data : ",data.toString())
})

child.stderr.on("data",(err)=>{
    console.log(err.toString())
})

child.stdin.write(JSON.stringify([2,4]))
child.stdin.end()

child.on("close",(code)=>{
    console.log("child exectured and ended with code : ", code)
})

