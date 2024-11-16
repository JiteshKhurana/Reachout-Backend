const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from the dashboard");
});

app.get("/hello", (req, res) => {
  res.send("hello hello mic testing");
});

app.get("/test", (req, res) => {
  res.send("testing it up");
});

app.listen(3000, () => {
  console.log("server is listening on port no 3000");
});
