const cluster = require("cluster");
const os = require("os");
const express = require("express");

if (cluster.isPrimary) {
    console.log(`primary PID : ${process.pid}`);
    const numCpus = os.cpus().length;

    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    const app = express();

    app.get("/", (req, res) => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            for (let j = 0; j < 1; j++) {
                sum += i;
            }
        }
        res.send(`Handled by Worker : ${process.pid} | Sum: ${sum}`);
    });

    app.listen(3000, () =>
        console.log(`App running on port 3000 | worker PID: ${process.pid}`),
    );
}
