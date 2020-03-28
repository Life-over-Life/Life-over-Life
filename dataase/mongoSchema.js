const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hospitalData', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const bedsSchema = new Schema({
    bed_id: {type: Number, required: true, unique: true },
    bed_type: {type: String, required: true },
    bed_status: {type: String, required: true },
    patient_id: {type: Number, required: true, unique: true },
    patient_gender: { type: String, required: true },
    patient_age: { type: Number, required: true },
    patient_address: { type: String },
    patient_contact_Num: { type: Number },
    patient_medical_history: { type: String },
    patient_disease: { type: String },
    patient_symptoms: { type: String },
    patient_condition: { type: String },
    patient_previous_criminal_history: { type: Boolean },
    patient_alcoholic_status: { type: Boolean },
    patient_marital_status: { type: Boolean },
    patient_dependents: { type: Number },
    patient_preexisting_serious_conditions: { type: Boolean },
    hospital_name: { type: String },
    checkin_date: { type: Date },
    patient_expected_discharge_date: { type: Date },
    ventilator_needed: { type: Boolean },
    other_details: { type: String },
});

const BedsModel = mongoose.model('beds', bedsSchema);

const nursesSchema = new Schema({
    nurse_id: { type: Number, required: true, unique: true },
    nurse_name: {type: String, required: true },
    nurse_phone_number: { type: Number, required: true }
});

const NursesModel = mongoose.model('nurses', nursesSchema);

const diseasesSchema = new Schema({
    disease_name: { type: String, required: true },
    mortality_rate: { type: Number, required: true }
});

const DiseasesModel = mongoose.model('diseases', diseasesSchema);

module.exports = { BedsModel, NursesModel, DiseasesModel };