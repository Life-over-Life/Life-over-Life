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

module.exports = {
    getAllBedsData
};