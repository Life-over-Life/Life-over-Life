const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

const getAllBedsData = (beds, callback) => {
    var sql = 'SELECT * FROM beds';
    connection.query(sql, (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(null, results);
        }
    })
};

const getAllNursesData = (nurses, callback) => {
    var sql = 'SELECT * FROM nurses';
    connection.query(sql, (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(null, results);
        }
    })
};

const getAllDiseases = (diseases, callback) => {
    var sql = 'SELECT * FROM diseases';
    connection.query(sql, (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(null, results);
        }
    })
}

module.exports = {
    getAllBedsData, getAllNursesData, getAllDiseases
};