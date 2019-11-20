const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios');

app.get("/posts", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      return res.status(422).json({ error: error.array() });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
