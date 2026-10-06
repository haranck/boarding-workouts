const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js", {
    workerData: { start: 1, end: 10000000 },
});

worker.on("message", (data) => {
    console.log("Total primes :", data.totalPrimes);
    console.log("first 10 primes :", [data.first10]);
    console.log("last 10 primes :", data.last10);
    console.log("executionTime:", data.executionTime);
});

worker.on("error", (error) => {
    console.log("Error :", error);
});

worker.on("exit", (code) => {
    console.log("worker finished and executed with code :", code);
});
