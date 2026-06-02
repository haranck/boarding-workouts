// const express = require('express')
// const app = express();
// const router = express.Router();

// // router.use((req,res,next) => {
// //     if(req.method === "GET"){
// //         console.log('get req shold block')
// //         res.send('get should block')
// //     }
// //     next()
// // })

// router.all("/all",(req,res) => {
//     res.send('this should work for all methods')
// })

// router.route('/chain')
// .get((req,res)=>res.send('get req'))
// .post((req,res)=>res.send('get req'))
// .put((req,res)=>res.send('get req'))
// .patch((req,res)=>res.send('get req'))

// router.get('/',(req,res)=>{
//     throw new Error('landing page not responds')
// })
// router.get("/home", (req, res) => {
//     res.send("Home Page")
// });

// router.use((err,req, res, next) => {
//   console.log(err.message)
//   res.status(500).json({success:false,message:err.message})
// });

// app.use("/", router);

// app.listen(3000, () => console.log("server running on port  3000"));



/////////////////////

const express  = require('express')
const app = express()
const fs = require('fs')

app.use((req,res,next)=>{
    const role = req.headers.role
    if(role === 'Admin'){
        console.log('admin')
        next()
    }else{
        console.log('not an admin')
        return res.json({message:"only admin can allowed"})
    }
})

app.get('/file',(req,res)=>{
    let today = new Date()
    let date = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()

    fs.writeFile('file.txt',` its demo file created in:${date}/${month}/${year}`,(err)=>{
        if(err)throw new Error(err)
        return res.json({message:"file writed"})
    })
})

app.listen(3000,()=>console.log('server jumbing'))