const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator');
const port = 3000;

app.get('/:number', [
  check('number').isNumeric()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  let number = req.params.number;
  let value = (number*number).toString();
  res.send(value);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));