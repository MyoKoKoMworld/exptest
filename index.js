const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ hello: "hello user" });
});

app.get("/users", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT);
