const fs  = require('fs')

fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err){
        throw new Error(err)
    }
    console.log(data)
})

fs.writeFile('input.txt','Heyy Dear',(err)=>{
    if(err){
        throw new Error
    }
    console.log('file writed successfully')
}) 
// fs.writeFile('demo.txt','demo file',(err)=>{
//     if(err){
//         throw new Error
//     }
//     console.log('file writed successfully')
// }) 

fs.appendFile('input.txt',' Love you',(err)=>{
    if(err){
        throw new Error(err)
    }
    console.log('file appended')
})

// if(fs.existsSync('input.txt')){
//     console.log('file exists')
// }else{
//     console.log('file not exist')
// }

// fs.rename('output.txt','input.txt',(err)=>{
//     if(err){
//         throw new Error(err)
//     }
//     console.log('file renamed')
// })

// fs.unlink('demo.txt',(err)=>{
//     if(err){
//         throw new Error(err)
//     }
//     console.log('file deleted successfully')
// })

// fs.link('input.txt','demo.txt',(err)=>{
//     if(err) throw new Error(err)
//     console.log("hard link created successfully")
// })

