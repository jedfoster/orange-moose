const express = require("express");

const { Router } = express;

const app = express();
const port = process.env.PORT;
const router = new Router();

const data = require("./data.json");
const uuid = require("uuid").v4;

router.get("/", (req, res) => {
  return res.sendStatus(501);
});

router.post("/", (req, res) => {
  return res.sendStatus(501);
});

router.put("/:id([A-Za-z0-9_-]+)", (req, res) => {
  return res.sendStatus(501);
});

app.use("/", router);

app.listen(port, () => console.log(`Server started: http://localhost:${port}`));

module.exports = app;
