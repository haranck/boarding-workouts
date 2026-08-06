// // block all request from 5 to 10 in a day

const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => {
    const now = new Date();
    const startTime = new Date();
    const endTime = new Date();
    startTime.setHours(5, 0, 0, 0);
    endTime.setHours(22, 0, 0, 0);
    if (now >= startTime && now <= endTime) {
        console.log(`[${now.toLocaleString()}] ${req.method} ${req.url}`);
        fs.writeFile("test.txt", `${req.method} ${req.url}`, (err) => {
            if (err) throw new Error("error occuring while writing ..");
            console.log("file writed successfully");
        });
    } else {
        next();
    }
});

app.get("/api", (req, res) => {
    res.send("asdfs");
});

app.listen(3000, () => console.log("server running on Port 3000"));

//////////////////////////////////////////////////////////////////////////////

// block 7Pm  to nextDay 7AM request and write the req.method to a file

const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 19 || hour <= 7) {
        fs.writeFile(
            "time.txt",
            ` Request Method : ${req.method} , Time : ${new Date()}`,
            (err) => {
                if (err) throw new Error("Something Went wrong");
                console.log("file writed");
            },
        );
    } else {
        next();
    }
});

app.get("/", (req, res) => {
    res.json({ message: "Helllo" });
});

app.listen(3000, () => console.log("server running on port 3000"));

//////////////////////////////////////////////////////////////////////////////

// block all requests from today until the same date next year

const express = require("express");
const app = express();
const fs = require("fs");

const start = new Date();
let end = new Date();
end.setFullYear(end.getFullYear() + 1);

app.use((req, res, next) => {
    let now = new Date();
    if (now >= start && now <= end) {
        console.log("Request Blocked");
    } else {
        next();
    }
});

app.get("/", (req, res) => {
    res.json({ message: "Helllo" });
});

app.listen(3000, () => console.log("server running on port 3000"));
