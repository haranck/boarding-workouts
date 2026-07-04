const express = require("express");
const app = express();
const { Worker } = require("worker_threads");

app.get("/sum", (req, res) => {
    const worker = new Worker("./worker.js", { workerData: { num: 1e9 } });

    worker.on("message", (result) => {
        console.log(result);
        res.status(200).json({
            message: "out put from worker ",
            result: result,
        });
    });
    worker.on("error", (error) => {
        res.status(404).json({ message: error.message });
    });
    worker.on("exit", (code) => {
        console.log("worker finished and exited with code ", code);
    });
});
app.get("/", (req, res) => {
    res.send("HOme page");
});

app.listen(3000, () => console.log("server running on prot 3000"));
