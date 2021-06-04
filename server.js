const express = require("express");

const app = express();

// GET /todos
// PUT /todo
// POST /todo/{id}

const data = [
  { completed: false, text: "eggs" },
  { completed: false, text: "bacon" }
];

app.get("/todos", (req, res) => {
  res.status(200).json(data);
});

app.post("/todo", (req, res) => {
  //data.push(req.data)
  res.status(200).send("Todo creation success");
});

app.listen(8080);
