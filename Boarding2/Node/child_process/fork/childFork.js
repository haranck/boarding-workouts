process.on("message", (data) => {
    console.log("data recieved from parent ", data);
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    process.send(sum);
});
