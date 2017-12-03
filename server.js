const express = require('express');
const app = express();

console.log("server is aan het runnen");

var server = app.listen(3000);

app.use(express.static('public'));
