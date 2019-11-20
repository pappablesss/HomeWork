const express = require('express');
const app = express();
const port = 3000;

app.get('/authorizedUser', (req, res) => {
    res.redirect('/registartion')
  })
app.get('/registartion', (req, res) => {
  res.send('Register ur name first!');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));