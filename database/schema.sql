DROP DATABASE IF EXISTS hospitalbeds;

CREATE DATABASE hospitalbeds;

USE hospitalbeds;

CREATE TABLE nurses (
    nurse_id int NOT NULL AUTO_INCREMENT,
    nurse_name varchar(30),
    nurse_phone_number int
);

CREATE TABLE diseases {
    disease_name varchar(20) NOT NULL,
    mortality_rate_percent int NOT NULL
};

CREATE TABLE beds (
    bed_id int NOT NULL AUTO_INCREMENT,
    bed_type varchar(20) NOT NULL,
    bed_status ENUM('Empty', 'Occupied') NOT NULL,
    patient_id int,
    patient_name varchar(30),
    patient_gender ENUM('male', 'female'),
    patient_age int,
    patient_address varchar(50),
    patient_contact_num int,
    patient_medical_history varchar(50),
    patient_disease varchar(30),
    patient_symptoms varchar(30),
    patient_condition ENUM('critical', 'non-critical'),
    patient_previous_criminal_history ENUM('true', 'false'),
    patient_alcoholic_status ENUM('true', 'false'),
    patient_marital_status ENUM('true', 'false'),
    patient_dependents int,
    patient_preexisting_serious_conditions ENUM('true', 'false'),
    nurse_id varchar(30),
    checkin_date varchar(10),
    patient_expected_discharge_date varchar(10),
    ventilator_needed ENUM('true', 'false'),
    other_details varchar(255),
    PRIMARY KEY (bed_id),
    FOREIGN KEY (nurse_id) REFERENCES nurses (nurse_id)
);

/* run mysql -u root -p < database/schema.sql */