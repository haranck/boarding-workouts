const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
    res.json({ message: "All users" });
});

app.post("/users", (req, res) => {
    res.json({ message: "User created" });
});

app.put("/users/:id", (req, res) => {
    res.json({ message: "User updated" });
});

app.delete("/users/:id", (req, res) => {
    res.json({ message: "User deleted" });
});

app.listen(3000,()=>console.log('server running'));
