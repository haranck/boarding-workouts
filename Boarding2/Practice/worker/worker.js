const { parentPort, workerData } = require("worker_threads");
let primes = [];
let total = 0;
let start = Date.now();
for (let i = workerData.start; i < workerData.end; i++) {
    let isPrime = true;
    if (i === 1) continue;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        total += 1;
        primes.push(i);
    }
}
let end = Date.now();
let executionTime = end - start;
let result = {
    totalPrimes: total,
    first10: primes.slice(0, 10),
    last10: primes.slice(-10),
    executionTime,
};
parentPort.postMessage(result);
// parentPort.postMessage()
