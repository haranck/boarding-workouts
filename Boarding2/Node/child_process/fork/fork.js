const { fork } = require("child_process");

const child = fork("childFork.js");

child.send({ num1: 10, num2: 20 });

child.on("message", (data) => {
    console.log("result from child : ", data);
});
