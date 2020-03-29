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
};

// const dischargeBeds = (beds, callback) => {
//     console.log('beds', beds);
//     var sql = 'UPDATE beds SET bed_status="Empty" patient_id=? patient_name=? patient_gender=? patient_age=? patient_address=? patient_contact_num=? patient_medical_history=? alcoholic_status=? marital_status=? numOfDependents=? preexisting_serious_conditions=? WHERE patient_id=6';
//     connection.query(sql, [beds.patient_id, beds.patient_name, beds.patient_gender, beds.patient_age, beds.patient_address, beds.patient_contact_num, beds.patient_medical_history, beds.alcoholic_status, beds.marital_status, beds.numOfDependents, beds.preexisting_serious_conditions], (error, result) => {
//         if (error) {
//             callback(error);
//             console.log(error)
//         } else {
//             callback(null, result);
//             console.log("ues")
//         }
//     });
// };

const dischargeBeds = (beds, callback) => {
    var sql = 'UPDATE beds SET patient_name=? WHERE bed_id=?';
    connection.query(sql, [beds.patient_name, beds.bed_id], (error, result, fields) => {
        if (error) {
            callback(error);
            console.log(error)
        } else {
            callback(null, result);
            console.log("ues")
        }
    });
};

module.exports = {
    getAllBedsData, getAllNursesData, getAllDiseases, dischargeBeds
};