// response middlware

const express = require("express");
const app = express();

const parsingMiddleware = (req, res, next) => {
    const originalJson = res.json;

    res.json = function (data) {
        if (typeof data === "string") {
            try {
                data = JSON.parse(data);
            } catch (error) {
                console.log('Invalid json string');
            }
        }
        return originalJson.call(this, data);
    };
    next();
};

app.use(parsingMiddleware)

app.get("/user", (req, res) => {
    const user = '{"name":"Haran","age":23}';
	console.log(JSON.parse(user))
    res.json(user);
});

app.listen(3000, () => console.log("server running on 3000"));
