const {fork} = require('child_process')

const child = fork('child')

child.on("message",(data)=>{
    console.log("message from child is ",data)
})
child.send({num1:10,num2:20})
child.on("error",(err)=>{
    console.log("errorwewe ",err)
})