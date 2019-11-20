const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const friends = [
  {
    name: "Nikita"
  },
  {
    name: "Valera"
  },
  {
    name: "Serega"
  }
];

// view all
app.get("/get", (req, res) => {
  res.send(friends);
});

app.post("/post"),
  (req, res) => {
    const friend = {
        name: req.body.name
    };
    friends.push(friend);
    res.send(friend);
  };
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
