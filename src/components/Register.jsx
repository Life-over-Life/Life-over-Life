import React from 'react';
import DiseasesDataTable from './DiseasesTable.jsx';
import $ from 'jquery';

var Theta = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
function EvalHypothesis(X) {
    var HypoX = 0;
    var i
    for (i = 0; i < Theta.length; i++) {
        HypoX += Theta[i] * X[i];
    }
    return HypoX;
}
function GradientDescent(X, Y) {
    HypoX = EvalHypothesis(X);
    var lr = 0.001;
    var i;
    var PartialDerivative
    for (i = 0; i < Theta.length; i++) {
        PartialDerivative = lr * (Y - HypoX) * X[i];
        Theta[i] += PartialDerivative;
    }
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            age: "",
            address: "",
            contact_num: "",
            medical_history: "",
            disease: "",
            symptoms: "",
            condition: "critical",
            previous_criminal_history: "",
            alcoholic_status: "",
            marital_status: "",
            numOfDependents: "",
            preexisting_serious_conditions: "",

            doctor_satisfaction: "",
            patient_id: "",
            resultView: false,
            doctor_satisfacted: true,
            checkin_date: "",
            patient_expected_discharge_date: "",
            ventilator_needed: "false",
            other_details: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddPatient = this.handleAddPatient.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            resultView: true
        })
    }

    FindLeastPriority() {
        var X = []
        var i;
        var PriorityPoints = []
        for (i = 0; i < this.props.data.bedsData.length; ++i) {
            var TempX = [];
            TempX[0] = Number(this.props.data.bedsData[i].patient_age);
            if (this.props.data.bedsData[i].patient_alcoholic_status === 'true') {
                TempX[1] = 0;
            }
            else {
                TempX[1] = 1;
            }
            if (this.props.data.bedsData[i].patient_marital_status === 'true') {
                TempX[2] = 1;
            }
            else {
                TempX[2] = 0;
            }
            TempX[3] = Number(this.props.data.bedsData[i].patient_dependents);
            if (this.props.data.bedsData[i].patient_preexisting_serious_conditions === 'true') {
                TempX[4] = 0;
            }
            else {
                TempX[4] = 1;
            }
            TempX[5] = this.props.data.bedsData[i]
            TempX[0] = TempX[0] / 100;
            TempX[0] = 1 / TempX[0];
            TempX[5] = 0;
            if (TempX[4] == 1) {
                TempX[4] = 0;
            }
            else {
                TempX[4] = 1;
            }
            X = [1, TempX[0], Math.pow(TempX[0], 2), TempX[1], Math.pow(TempX[1], 2), TempX[2], Math.pow(TempX[2], 2), TempX[3], Math.pow(TempX[3], 2), TempX[4], Math.pow(TempX[4], 2), TempX[5], Math.pow(TempX[5], 2)];
            PriorityPoints[i] = EvalHypothesis(X);
        }
        var min_priority = PriorityPoints[0];
        var min_index = 0;
        for (i = 0; i < this.props.data.bedsData.length; ++i) {
            if (PriorityPoints[i] < min_priority) {
                min_priority = PriorityPoints[i];
                min_index = i;
            }
        }
        return min_index;
    }

    handleAddPatient(event) {
        event.preventDefault();
        $.ajax({
            type: 'PATCH',
            url: '/patients/:patient_id',
            data: {
                patient_id: this.state.patient_id,
                bed_status: "Occupied",
                patient_id: Math.floor(Math.random()*1000),
                patient_name: this.state.name,
                patient_gender: this.state.gender,
                patient_age: this.state.age,
                patient_address: this.state.address,
                patient_contact_num: this.state.contact_num,
                patient_medical_history: this.state.medical_history,
                patient_disease: this.state.disease,
                patient_symptoms: this.state.symptoms,
                patient_condition: this.state.condition,
                patient_previous_criminal_history: this.state.previous_criminal_history,
                patient_alcoholic_status: this.state.alcoholic_status,
                patient_marital_status: this.state.marital_status,
                patient_dependents: this.state.numOfDependents,
                patient_preexisting_serious_conditions: this.state.preexisting_serious_conditions,
                checkin_date: this.state.checkin_date,
                patient_expected_discharge_date: this.state.patient_expected_discharge_date,
                ventilator_needed: this.state.ventilator_needed,
                other_details: this.state.other_details
            }
        })
    }

    render() {
        var minPatient = this.props.data.bedsData[this.FindLeastPriority()];
        return (
            <div className="wrapper">

                {this.state.resultView ?
                    <div className="result-form">
                        <div className="input-fields">
                            <h1 className="result-title">Patient Detail</h1>
                            <h4 className="result-title">Name:
                        <p className="result-field"> {this.state.name}</p>
                            </h4>
                            <h4 className="result-title">Age:
                        <p className="result-field"> {this.state.age}</p>
                            </h4>
                            <h4 className="result-title">Alcoholic Status:
                        <p className="result-field"> {this.state.alcoholic_status}</p>
                            </h4>
                            <h4 className="result-title">Marital Status:
                        <p className="result-field"> {this.state.marital_status}</p>
                            </h4>
                            <h4 className="result-title">Number of Dependents:
                        <p className="result-field"> {this.state.numOfDependents}</p>
                            </h4>
                            <h4 className="result-title">Pre-existing Serious Conditions:
                        <p className="result-field"> {this.state.preexisting_serious_conditions}</p>
                            </h4>


                            <h1 className="result-title">Inpatient With Minimum Need of Care Detail</h1>
                            <h4 className="result-title">Patient ID:
                        <p className="result-field"> {minPatient.patient_id}</p>
                            </h4>
                            <h4 className="result-title">Name:
                        <p className="result-field"> {minPatient.patient_name}</p>
                            </h4>
                            <h4 className="result-title">Age:
                        <p className="result-field"> {minPatient.patient_age}</p>
                            </h4>
                            <h4 className="result-title">Alcoholic Status:
                        <p className="result-field"> {minPatient.patient_alcoholic_status}</p>
                            </h4>
                            <h4 className="result-title">Marital Status:
                        <p className="result-field"> {minPatient.patient_marital_status}</p>
                            </h4>
                            <h4 className="result-title">Number of Dependents:
                        <p className="result-field"> {minPatient.patient_dependents}</p>
                            </h4>
                            <h4 className="result-title">Pre-existing Serious Conditions:
                        <p className="result-field"> {minPatient.patient_preexisting_serious_conditions}</p>
                            </h4>
                            <br />
                            <br />
                            <br />
                            <DiseasesDataTable data={this.props.data}/>
                            <br />
                            <br />
                            <br />
                            <h1 className="result-title">Doctor Review</h1>
                            <label className="select-result">
                                Are You Satisfacted:
                                <input type="radio" name="doctor_satisfacted" value="true" onChange={this.handleChange} /><label> Yes</label>
                                <input type="radio" name="doctor_satisfacted" value="false" onChange={this.handleChange} /><label> No</label>
                            </label>   
                            {this.state.doctor_satisfacted === "false" && 
                            <form onSubmit={this.handleAddPatient}>
                                <br />
                                <br />
                                <br />
                                <h4 className="result-title">Enter Patient ID</h4>
                                <input className="input-result" type="number" name="patient_id" value={this.state.value} onChange={this.handleChange} />
                                <h4 className="result-title">Enter Check-in Date</h4>
                                <input className="input-result" type="number" name="checkin_date" value={this.state.value} onChange={this.handleChange} />
                                <h4 className="result-title">Enter Patient Expected Discharge Date</h4>
                                <input className="input-result" type="number" name="patient_expected_discharge_date" value={this.state.value} onChange={this.handleChange} />
                                <h4 className="result-title">Enter Other Detail</h4>
                                <input className="input-result" type="text" name="other_details" value={this.state.value} onChange={this.handleChange} />
                                <label className="select-result">
                                    Ventilator Needed:
                                <input type="radio" name="ventilator_needed" value="true" onChange={this.handleChange} /><label> Yes</label>
                                    <input type="radio" name="ventilator_needed" value="false" onChange={this.handleChange} /><label> No</label>
                                </label>   

                                <input className="submitBtn" type="submit" value="Accept Patient" />
                            </form>
                            }
                        </div>
                    </div>

                    :

                    <div className="register-form">
                        <div className="input-fields">
                            <h1 className="register-title">Register A Patient</h1>
                            <form onSubmit={this.handleSubmit}>
                                <input className="input" type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Name:" />
                                <label className="select">
                                    Gender:
                                <input type="radio" name="gender" value="male" onChange={this.handleChange} /><label> Male</label>
                                    <input type="radio" name="gender" value="female" onChange={this.handleChange} /><label> Female</label>
                                </label>
                                <input className="input" type="number" name="age" value={this.state.value} onChange={this.handleChange} placeholder="Age" />
                                <input className="input" type="text" name="address" value={this.state.value} onChange={this.handleChange} placeholder="Address" />
                                <input className="input" type="text" name="contact_num" value={this.state.value} onChange={this.handleChange} placeholder="Phone Number" />
                                <input className="input" type="text" name="medical_history" value={this.state.value} onChange={this.handleChange} placeholder="Medical History" />
                                <label className="select">
                                    Disease:
                                <select name="disease" value={this.state.value} onChange={this.handleChange}>
                                        {this.props.data.diseasesData.map((disease, i) => {
                                            return <option key={i} value={disease.disease_name}>{disease.disease_name}</option>
                                        })}
                                    </select>
                                </label>
                                <input className="input" type="text" name="symptoms" value={this.state.value} onChange={this.handleChange} placeholder="Symptom(s)" />
                                <label className="select">
                                    Condition:
                                <select name="condition" value={this.state.value} onChange={this.handleChange}>
                                        <option value="critical">Critical</option>
                                        <option value="non-critical">Non-critical</option>
                                    </select>
                                </label>
                                <label className="select">
                                    Previous Criminal History:
                                <input type="radio" name="previous_criminal_history" value="true" onChange={this.handleChange} /><label> Yes</label>
                                    <input type="radio" name="previous_criminal_history" value="false" onChange={this.handleChange} /><label> No</label>
                                </label>
                                <label className="select">
                                    Alcoholic:
                                <input type="radio" name="alcoholic_status" value="true" onChange={this.handleChange} /><label> Yes</label>
                                    <input type="radio" name="alcoholic_status" value="false" onChange={this.handleChange} /><label> No</label>
                                </label>
                                <label className="select">
                                    Marital Status (married):
                                <input type="radio" name="marital_status" value="true" onChange={this.handleChange} /><label> Yes</label>
                                    <input type="radio" name="marital_status" value="false" onChange={this.handleChange} /><label> No</label>
                                </label>
                                <input className="input" type="number" name="numOfDependents" value={this.state.value} onChange={this.handleChange} placeholder="Number of Dependents" />
                                <label className="select">
                                    Pre-existing Serious Condition:
                                <select name="preexisting_serious_conditions" value={this.state.value} onChange={this.handleChange}>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </label>

                                <input className="submitBtn" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                }   
            </div>

        )
    }
}

export default Register;