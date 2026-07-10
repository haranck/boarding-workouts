const { parentPort, workerData } = require("worker_threads");

let totalSalary = 0;
for (let emp of workerData.employees) {
    totalSalary += emp.salary;
}

let obj = {
    departMentName: workerData.name,
    avgSalary: totalSalary / workerData.employees.length,
};
parentPort.postMessage(obj);
