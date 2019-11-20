const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    title: "lorem ipsum1",
    text: "234857289345"
  },
  {
    title: "lorem ipsum2",
    text: "23452345"
  },
  {
    title: "lorem ipsum3",
    text: "32452345"
  },
  {
    title: "lorem ipsum4",
    text: "123123"
  }
];

app.get("/", (req, res) => {
  if (req.query.type === "text") {
    res.set("Content-Type", "text/plain");
    res.send(posts);
  } else if (req.query.type === "json") {
    res.json(posts);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
