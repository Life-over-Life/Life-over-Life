const faker = require('faker');
const fs = require('fs');

/*
// Create 10 data in CSV file using faker library
const writeUsers = fs.createWriteStream('nursesTableSQLData.csv');

writeUsers.write('nurse_name, nurse_phone_number\n', 'utf8');

function writeNursesData(writer, encoding, callback) {
    let i = 10;
    let id = 0;
    function write() {
        let ok = true;
        do {
        i -= 1;
        const nurse_name = faker.lorem.word();
        const nurse_phone_number = faker.random.number({
            'min': 0000000000,
            'max': 9999999999
        });

    const data = `${nurse_name},${nurse_phone_number}\n`;
    if (i === 0) {
        writer.write(data, encoding, callback);
    } else {
        ok = writer.write(data, encoding);
    }
        } while (i > 0 && ok);
        if (i > 0) {
            write.once('drain', write);
        }
    }
    write()
}

writeNursesData(writeUsers, 'utf-8', () => {
    writeUsers.end();
});
*/


// Create 10 data in CSV file using faker library
const writeUsers = fs.createWriteStream('diseasesTableSQLData.csv');

writeUsers.write('disease_name, mortality_rate\n', 'utf8');

function writeDiseasesData(writer, encoding, callback) {
    let i = 10;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            const disease_name = faker.lorem.word();
            const mortality_rate = Math.floor(Math.random()*100);

            const data = `${disease_name},${mortality_rate}\n`;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            write.once('drain', write);
        }
    }
    write()
}

writeDiseasesData(writeUsers, 'utf-8', () => {
    writeUsers.end();
});


/*
// Create 10 data in CSV file using faker library
const writeUsers = fs.createWriteStream('bedsTableSQLData.csv');

writeUsers.write('bed_type, bed_status, patient_id, patient_name, patient_gender, patient_age, patient_address, nurse_phone_number, patient_medical_history, patient_disease, patient_symptoms, patient_condition, patient_previous_criminal_history, patient_alcoholic_status, patient_marital_status, patient_dependents, patient_preexisting_serious_conditions, nurse_id, checkin_date, patient_expected_discharge_date, ventilator_needed, other_details\n', 'utf8');

function writeBedsData(writer, encoding, callback) {
    let i = 10;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            const bed_type = faker.lorem.word();
            const bed_status = ['Empty', 'Occupied'][Math.floor(Math.random() * Math.floor(2))];
            const patient_id = Math.floor(Math.random() * 10000);
            const patient_name = faker.lorem.word();
            const patient_gender = ['male', 'female'][Math.floor(Math.random() * Math.floor(2))];
            const patient_age = Math.floor(Math.random() * 122);
            const patient_address = faker.address.streetAddress();
            const nurse_phone_number = faker.random.number({
                'min': 0000000000,
                'max': 9999999999
            });
            const patient_medical_history = faker.lorem.word();
            const patient_disease = faker.lorem.word();
            const patient_symptoms = faker.lorem.word();
            const patient_condition = ['critical', 'non-critical'][Math.floor(Math.random()*Math.floor(2))];
            const patient_previous_criminal_history = ['true', 'false'][Math.floor(Math.random() * Math.floor(2))];
            const patient_alcoholic_status = ['true', 'false'][Math.floor(Math.random() * Math.floor(2))];
            const patient_marital_status = ['true', 'false'][Math.floor(Math.random() * Math.floor(2))];
            const patient_dependents = Math.floor(Math.random() * 10);
            const patient_preexisting_serious_conditions = ['true', 'false'][Math.floor(Math.random() * Math.floor(2))];
            const nurse_id = faker.lorem.word();
            const checkin_date = faker.date.between('2020-01-01', '2020-3-28');
            const patient_expected_discharge_date = faker.date.between('2020-03-28', '2020-8-31');
            const ventilator_needed = ['true', 'false'][Math.floor(Math.random() * Math.floor(2))];
            const other_details = faker.lorem.word();

            const data = `${bed_type},${bed_status},${patient_id},${patient_name},${patient_gender},${patient_age},${patient_address},${nurse_phone_number},${patient_medical_history},${patient_disease},${patient_symptoms},${patient_condition},${patient_previous_criminal_history},${patient_alcoholic_status},${patient_marital_status},${patient_dependents},${patient_preexisting_serious_conditions},${nurse_id},${checkin_date},${patient_expected_discharge_date},${ventilator_needed},${other_details}\n`;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            write.once('drain', write);
        }
    }
    write()
}

writeBedsData(writeUsers, 'utf-8', () => {
    writeUsers.end();
});
*/