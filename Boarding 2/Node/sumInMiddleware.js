const express = require("express");
const app = express();

const sumMiddleware = (req, res, next) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);

    req.var = {
        num1,
        num2,
    };
    next();
};

// app.use(sumMiddleware)

app.get("/:num1/:num2", sumMiddleware, (req, res) => {
    const sum = req.var.num1 + req.var.num2;
    console.log(sum);
    res.send(`Sum is ${sum}`);
});

app.listen(3000, () => console.log("server running on port 3000"));
