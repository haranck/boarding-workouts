const cluster = require("cluster");
const os = require("os");
const express = require("express");

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;

  console.log(`Primary: ${process.pid}`);

  for (let i = 0; i < numCPUs-8; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {

  const app = express();

  app.get("/", (req, res) => {
	console.log("Landing:", process.pid);
    res.send(`Landing Page : Handled by Worker ${process.pid}`);
  });
  app.get('/home',(req,res)=>{
	console.log('Home',process.pid)
	res.send(`Home Page : Handled by Worker ${process.pid}`);
  })

  app.get("/crash", (req, res) => {
    process.exit(1);
  });
 
  app.listen(3000, () => {
    console.log(`App listening on port 3000 :: Worker PID :${process.pid}`);
  });
} 