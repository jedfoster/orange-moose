const express = require("express");

const app = express();
const port = process.env.PORT;

const data = require("./data.json");
const uuid = require("uuid").v4;

app.get("/", (req, res) => {
  // return res.json(data);
  return res.sendStatus(501);
});

app.post("/", (req, res) => {
  return res.sendStatus(501);
});

app.put("/:id([A-Za-z0-9_-]+)", (req, res) => {
  return res.sendStatus(501);
});

app.listen(port, () => console.log(`Server started: http://localhost:${port}`));

module.exports = app;
