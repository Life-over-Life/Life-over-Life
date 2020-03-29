import React from 'react';
const $ = require('jquery');

class Discharge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bed_id: "",
            patient_id: ""
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
        console.log(this.state.bed_id);
        console.log(this.state.patient_id);
        var bed_id = this.state.bed_id;
        if (bed_id === "" || this.state.patient_id === "") {
            alert('Please make sure the form is filled out correctly.');
        } else {
            $.ajax({
                type: 'PATCH',
                url: '/beds/'+bed_id,
                data: { bed_id: bed_id, patient_id: 0, patient_name: null, patient_gender: 'male', patient_age: 0, patient_address: null, patient_contact_num: 0, patient_medical_history: null, patient_disease: null, patient_symptoms: null,
                patient_condition: 'non-critical',
                patient_previous_criminal_history: 'false',patient_alcoholic_status: 'false', patient_marital_status: 'false', patient_dependents: 0, patient_preexisting_serious_conditions: 'false', checkin_date: null, patient_expected_discharge_date: null, ventilator_needed: 'false', other_details: null },
                success: console.log()
            });
            this.setState({
                bed_id: "",
                patient_id: ""
            });
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div className="discharge-wrapper">
                <div className="discharge-form">
                    <div className="input-fields">
                        <h1 className="discharge-title">
                            Discharge a Patient
                        </h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className="input" type="number" name="bed_id" value={this.state.value} onChange={this.handleChange} placeholder="Bed ID" />
                            <input className="input" type="number" name="patient_id" value={this.state.value} onChange={this.handleChange} placeholder="Patient ID" />
                            <input className="dischargeBtn" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Discharge;