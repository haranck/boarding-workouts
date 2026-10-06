///////////////////////////////////////    block all request from 5 to 10 in a day  //////////////////////////////////////////////////////////////////
// const express = require("express");
// const app = express();
// const fs = require("fs");

// app.use((req, res, next) => {
//     let startTime = new Date();
//     let endTime = new Date();
//     startTime.setHours(5, 0, 0, 0, 0);
//     endTime.setHours(22, 0, 0, 0, 0);
//     let now = new Date();
//     if (startTime < now && endTime > now) {
// console.log("req in btween 5 and 10");
// fs.appendFile("error.txt", `${req.url},${req.method}\n`, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("file appended successfully");
// });
//     }else{
//         next()
//     }
// });

// app.get("/", (req, res) => {
//     res.send("helloo")
// });

// app.listen(5000, () => console.log("server running or port 3000"));

//////////////////////////////////   block 7Pm  to nextDay 7AM request and write the req.method to a file   ///////////////////////////////////////////////

// const express = require("express");
// const app = express();
// const fs = require("fs");

// app.use((req, res, next) => {
//     let currentHour = new Date().getHours();
    
//     if (currentHour > 19 || currentHour < 7) {

//         console.log("req in btween 7AM and 7PM");
//         fs.appendFile("error.txt", `${req.url},${req.method}\n`, (err) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log("file appended successfully");
//         });
//     }else{
//         next()
//     }
    
// });

// app.get("/", (req, res) => {
//     res.send("helloo");
// });

// app.listen(5000, () => console.log("server running or port 3000"));



/////////////////////////////////////////////   block all requests from today until the same date next year   ///////////////////////////////////////////


const express = require("express");
const app = express();
const fs = require("fs");

let endTime = new Date()
endTime.setFullYear(endTime.getFullYear()+1)


app.use((req,res,next)=>{
    let now  = new Date()
    if(now <= endTime ){
        console.log("req block ")
        res.json({success:false,error:"request Hacked"})
    }else{
        next()
    }
})
 
app.get("/", (req, res) => {
    res.send("helloo");
});

app.listen(5000, () => console.log("server running or port 3000")); 