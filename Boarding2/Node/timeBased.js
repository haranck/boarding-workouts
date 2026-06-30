const express = require("express");
const app = express();
const fs = require('fs')

app.use((req, res, next) => {
    const now = new Date();
    const startTime = new Date();
    const endTime = new Date();
    startTime.setHours(5, 0, 0, 0);
    endTime.setHours(22, 0, 0, 0);
    console.log(startTime.toLocaleString());
    console.log(endTime.toLocaleString());
    if (now >= startTime && now <= endTime) {
        console.log(`[${now.toLocaleString()}] ${req.method} ${req.url}`);
		fs.writeFile('test.txt',`${req.method} ${req.url}`,(err)=>{
			if(err)throw new Error('error occuring while writing ..')
			console.log('file writed successfully')
		})
    } else {
        next();
    }
});

app.get("/api", (req, res) => {
    res.send("asdfs");
});

app.listen(3000, () => console.log("server running on Port 3000"));