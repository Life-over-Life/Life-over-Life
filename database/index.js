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

const dischargeBeds = (beds, callback) => {
    console.log('beds', beds);
    var sql = 'UPDATE beds SET bed_status="Empty", patient_id=?, patient_name=?, patient_gender=?, patient_age=?, patient_address=?, patient_contact_num=?, patient_medical_history=?, patient_disease=?, patient_symptoms=?, patient_condition=?, patient_previous_criminal_history=?, patient_alcoholic_status=?, patient_marital_status=?, patient_dependents=?, patient_preexisting_serious_conditions=?, checkin_date=?, patient_expected_discharge_date=?, ventilator_needed=?  WHERE bed_id=?';
    connection.query(sql, [beds.patient_id, beds.patient_name, beds.patient_gender, beds.patient_age, beds.patient_address, beds.patient_contact_num, beds.patient_medical_history, beds.patient_disease, beds.patient_symptoms, beds.patient_condition, beds.patient_previous_criminal_history, beds.patient_alcoholic_status, beds.patient_marital_status, beds.patient_dependents, beds.patient_preexisting_serious_conditions, beds.checkin_date, beds.patient_expected_discharge_date, beds.ventilator_needed, beds.bed_id], (error, result) => {
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