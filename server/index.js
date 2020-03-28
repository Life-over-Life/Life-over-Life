const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const morgan = require('morgan');
const { getAllBedsData, getAllNursesData, getAllDiseases } = require('../database/index.js');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname + '/../public')));

app.get('/beds', (req, res) => {
    getAllBedsData(req.body, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});

app.get('/nurses', (req, res) => {
    getAllNursesData(req.body, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    })
});

app.get('/diseases', (req, res) => {
    getAllDiseases(req.body, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));