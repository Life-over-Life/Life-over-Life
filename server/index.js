const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { getAllBedsData, getAllNursesData, getAllDiseases, dischargeBeds, addNewBed, addNewPatient } = require('../database/index.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
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

app.patch('/beds/:bed_id', (req, res) => {
    dischargeBeds(req.body, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(result);
        }
    })
});

app.patch('/patients/:patient_id', (req, res) => {
    addNewPatient(req.body, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

app.post('/addBeds', (req, res) => {
    addNewBed(req.body, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(201).send(result);
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));