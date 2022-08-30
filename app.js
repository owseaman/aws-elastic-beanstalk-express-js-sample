const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Change the message in line 5, Other than Hello World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
