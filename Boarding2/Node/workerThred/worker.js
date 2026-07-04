const { parentPort, workerData } = require("worker_threads");

let sum = 0;
console.log(workerData);

for (let i = 0; i < workerData.num; i++) {
    sum += i;
}

parentPort.postMessage(sum);
