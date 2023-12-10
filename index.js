const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "hello user" });
});

app.get("/users", (req, res) => {
  res.send("hello");
});

app.listen(3000);
