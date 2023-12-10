const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ hello: "hello user" });
});

app.get("/users", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT);
