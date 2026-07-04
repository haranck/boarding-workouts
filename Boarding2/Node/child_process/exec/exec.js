const { exec } = require("child_process");

exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log("Error", error.message);
        return;
    }
    if (stderr) {
        console.log("StdErr : ", stderr.message);
    }
    console.log("OutPut", stdout);
});
