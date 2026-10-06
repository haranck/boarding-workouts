process.on("message",(data)=>{
    let sum = data.num1+data.num2
    process.send(sum)
})