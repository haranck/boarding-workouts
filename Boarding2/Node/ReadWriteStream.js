const fs = require("fs")

const readStream = fs.createReadStream('output.txt',{encoding:"utf8"})

readStream.on("data",(chunk)=>{
    console.log(chunk)
})

// const writeStream = fs.createWriteStream('output.txt')

// writeStream.write("hello my name is haran")

// writeStream.end()