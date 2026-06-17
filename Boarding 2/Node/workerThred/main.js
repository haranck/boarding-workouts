const express = require("express");
const app = express();
const { Worker } = require("worker_threads");

app.get("/sum", (req, res) => {

	const worker = new Worker('./worker.js')

    worker.on("message", (result) => {
        res.status(200).json({message:`Sum from Worker : ${result}`});
    });

    worker.on("error", (error) => {
        // res.status(500).send(error.message);
		res.status(404).json({message:error.message})
    });

    worker.on("exit", (code) => {
        console.log("worker finished and exited with code :", code);
    });
});

app.get("/", (req, res) => {
    res.send("Home Route");
});

app.listen(3000, () => {
    console.log("App is running on port : 3000");
});
