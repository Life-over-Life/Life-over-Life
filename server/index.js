const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname + '/../public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));