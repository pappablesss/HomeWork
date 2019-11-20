const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator');
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', [
  check('number').isNumeric()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  let number = req.body.number;
  let value = (number*number).toString();
  res.json({"number":value});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));