import React from 'react';
import DiseasesDataTable from './DiseasesTable.jsx';
import $ from 'jquery';

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
            doctor_satisfacted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state)
        this.setState({
            resultView: true
        })
    }

    render() {
        // console.log('diseasesData', this.props.data.diseasesData);
        // console.log('nursesData', this.props.data.nursesData);
        // console.log(this.state.age)
        // console.log(this.state.doctor_satisfacted)

        if (this.state.doctor_satisfacted) {
            var confirmChangeForm = <form onSubmit={this.handleSubmit}>
                <br />
                <br />
                <br />
                <h4 className="result-title">Enter Patient ID</h4>
                <input className="input-result" type="number" name="patient_id" value={this.state.value} onChange={this.handleChange} />

                <input className="submitBtn" type="submit" value="Accept Patient" />
            </form>
        } else {
            <div></div>
        }

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
                            <br />
                            <br />
                            <br />
                            <DiseasesDataTable data={this.props.data}/>
                            <br />
                            <br />
                            <br />
                            <h1 className="result-title">Doctor Review</h1>
                            <label className="select-result">
                                Are You Satisface:
                                <input type="radio" name="doctor_satisfacted" value="true" onChange={this.handleChange} /><label> Yes</label>
                                <input type="radio" name="doctor_satisfacted" value="false" onChange={this.handleChange} /><label> No</label>
                            </label>
                            {
                                confirmChangeForm
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