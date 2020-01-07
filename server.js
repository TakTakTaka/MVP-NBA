const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, () => console.log(`NBA MVP App listening on port ${port}`))