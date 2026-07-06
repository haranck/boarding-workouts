const express = require("express");
const app = express();
const crypto = require("crypto");
const EventEmitter = require("events");
const emitter = new EventEmitter();
const fs = require("fs");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);

emitter.on("error", (error) => {
    console.log(error);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(error, "utf8", "hex") + cipher.final("hex");
    // encrypted+=cipher.final('hex')

    fs.appendFile(
        "ecrypted.txt",
        `Data : ${encrypted} : Time: ${new Date().getHours()} : ${new Date().getMinutes()} \n\n`,
        "utf8",
        (err) => {
            if (err) throw new Error("file writng not done");
            console.log("file writed on file ecrypted.txt");
        },
    );
});

app.get("/", (req, res) => {
    try {
        throw new Error("Something went wrong");
    } catch (error) {
        emitter.emit("error", error.message);
    }
});

app.listen(3000, () => console.log("server runnning"));