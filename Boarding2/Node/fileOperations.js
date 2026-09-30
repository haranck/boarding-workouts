const fs = require("fs");

fs.readFile("time.txt", "utf-8", (err, data) => {
    let arr = [];
    if (err) {
        console.log(err);
        return;
    }

    let names = data.split("\n");
    let freq = {};

    for (let name of names) {
        freq[name] = (freq[name] || 0) + 1;
    }
    for (let name in freq) {
        if (freq[name] > 1) {
            arr.push(name);
        }
    }
    console.log(arr);
    fs.writeFile("time.txt", arr.join("\n"), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("file writed");
        fs.copyFile("time.txt", "sample.txt", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("copied");
        });
    });
});


// fs.readFile('input.txt','utf-8',(err,data)=>{
//     if(err){
//         throw new Error(err)
//     }
//     console.log(data)
// })

// fs.writeFile('input.txt','Heyy Dear',(err)=>{
//     if(err){
//         throw new Error
//     }
//     console.log('file writed successfully')
// })
// fs.writeFile('demo.txt','demo file',(err)=>{
//     if(err){
//         throw new Error
//     }
//     console.log('file writed successfully')
// })

// fs.appendFile('input.txt',' Love you',(err)=>{
//     if(err){
//         throw new Error(err)
//     }
//     console.log('file appended')
// })

// fs.access("time.txt",fs.constants.R_OK,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file exisits')
// })

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
