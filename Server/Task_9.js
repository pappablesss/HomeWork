const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");


app.get("/get", (req, res) => {
  fs.readFile("./Files/File_1.txt", (err, data) => {
    if (err) return res.status(422).json({ errors: errors.array() });
    res.send(data);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
