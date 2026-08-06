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
    //encryption

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

    // //decryption

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = decipher.update(encrypted, "hex", "utf8")+decipher.final('utf8')

    fs.appendFile(
        "decrypted.txt",
        `${decrypted} : Time : ${new Date().getHours()}:${new Date().getMinutes()} \n\n`,
        (error) => {
            if (error) throw new Error("something went wrong");
            console.log("file writed on decrypted.txt");
        },
    );
});

app.get("/", (req, res) => {
    try {
        throw new Error("Something went wrongsss");
    } catch (error) {
        emitter.emit("error", error.message);
    }
});

app.listen(3000, () => console.log("server runnning"));

// cipher.update(
//     "Database Error", // Input
//     "utf8",           // Input format
//     "hex"             // Output format
// );
