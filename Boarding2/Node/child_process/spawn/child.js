let sum = 0;

for (let i = 0; i < 100000; i++) {
    sum += i;
}
// console.log(sum)
process.stdout.write(`${sum}`); // this happens under the hood of console.log
console.error("404");

process.stdin.on("data", (data) => {
    console.log("Recieved from parent : ");
    console.log(data.toString());
	// process.stdout.write(`Recieved from parent ${data}`)
});
