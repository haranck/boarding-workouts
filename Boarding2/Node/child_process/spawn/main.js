const { spawn } = require("child_process");

const child = spawn("node", ["child.js"]);
// const child = spawn('python',['python.py'])

child.stdout.on("data", (data) => {
    console.log("data from child ", data.toString());
});
child.stderr.on("data", (error) => {
    console.error("Error", error.toString());
});

child.stdin.write("Hello Child\nHow are you ?");
child.stdin.end();

child.on("close", (code) => {
    console.log("child exited with code : ", code);
});
