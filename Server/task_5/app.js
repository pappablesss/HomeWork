const express = require('express');
const app = express();
const port = 3000;

app.use('/static1', express.static('./Files'));
app.use('/static2', express.static('./Files2'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));